// server.js (Node.js / Express example)
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: path.join(__dirname, "src/Assets"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  res.send({ message: "File uploaded successfully!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

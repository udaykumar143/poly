// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Panel - Upload Images</h2>
      <form onSubmit={handleUpload} className="mt-4">
        <div className="form-group">
          <label htmlFor="fileUpload">Choose an Image</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;

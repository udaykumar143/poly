import React from "react";
import MyNavbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Faq from "./Pages/FAQ/Faq.jsx";
import Livestock from "./Pages/Category/Livestock.jsx";
import AdminPanel from "./AdminPanel.jsx";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/categories/poultry" element={<Livestock />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;

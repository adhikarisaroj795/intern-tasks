import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/about us/AboutUs";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Services from "./pages/serviceas/Services";
import Accordion from "./pages/accordion/Accordion";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

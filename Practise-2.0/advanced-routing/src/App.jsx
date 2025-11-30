import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/men" element={<Men />}></Route>
        <Route path="/product/women" element={<Women />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

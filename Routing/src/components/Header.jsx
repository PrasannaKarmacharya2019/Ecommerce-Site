import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between shadow-lg items-center py-5 px-10">
      <div className="logo">
        <img className="" src="./vite.svg" alt="" />
      </div>
      <nav className="flex space-x-7">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="buttons">
        <button className="bg-blue-700 text-white px-5 py-2 rounded">
          Log-In
        </button>
      </div>
    </header>
  );
};

export default Header;

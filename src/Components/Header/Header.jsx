import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold ">
          <NavLink to="/" className="hover:text-gray-300">
            AK construction
          </NavLink>
        </div>
        <nav className="space-x-8">
          <NavLink
            to="/"
            exact
            className="text-gray-400 hover:text-white"
            activeClassName="text-white font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-400 hover:text-white"
            activeClassName="text-white font-bold"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-400 hover:text-white"
            activeClassName="text-white font-bold"
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className="text-gray-400 hover:text-white"
            activeClassName="text-white font-bold"
          >
            FAQ
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

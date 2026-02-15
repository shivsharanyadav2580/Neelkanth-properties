import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 
                       shadow-md sticky top-0 z-50"
    >
      <div
        className="max-w-7xl mx-auto px-4 py-4 
                      flex flex-col lg:flex-row 
                      items-center justify-between gap-4"
      >
        <Link to="/home">
          <h1
            className="text-2xl sm:text-3xl font-extrabold 
                       text-indigo-900 tracking-wide 
                       hover:text-indigo-700 
                       transition duration-300 cursor-pointer"
          >
            NEELKANTH PROPERTIES
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="w-full lg:w-1/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full pl-5 pr-12 py-2.5 rounded-full 
                         bg-white text-gray-700 
                         placeholder-gray-400
                         border border-indigo-200 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-sm sm:text-base transition duration-300"
            />

            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 
                         bg-indigo-500 hover:bg-indigo-600 
                         text-white p-2 rounded-full 
                         transition duration-300"
            >
              <FaSearch size={14} />
            </button>
          </div>
        </form>

        <ul className="flex gap-6 text-gray-700 font-medium text-sm sm:text-base">
          <Link to="/home">
            <li className="hover:text-indigo-600 cursor-pointer transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-indigo-600 cursor-pointer transition duration-300">
              About
            </li>
          </Link>
          <Link to="/signup">
            <li className="hover:text-indigo-600 cursor-pointer transition duration-300">
              Sign Up
            </li>
          </Link>
          <Link to="/signin">
            <li className="hover:text-indigo-600 cursor-pointer transition duration-300">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

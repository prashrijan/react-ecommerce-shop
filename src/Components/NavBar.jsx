import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3225/3225196.png"
            className="h-8"
            alt="Shop Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Shop
          </span>
        </NavLink>
        <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink to="/cart">
            <button
              onClick={() => setActiveLink("/cart")}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Go To Cart
            </button>
          </NavLink>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                onClick={() => setActiveLink("/")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/"
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700"
                }  p-0`}
                aria-current={`${activeLink === "/" ? "page" : "undefined"}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setActiveLink("/about")}
                className={`block py-2 px-3 ${
                  activeLink === "/about"
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700"
                } text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setActiveLink("/contact")}
                className={`block py-2 px-3 ${
                  activeLink === "/contact"
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 hover:bg-transparent hover:text-blue-700"
                } text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

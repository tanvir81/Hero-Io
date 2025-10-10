import React from "react";
import { Link, NavLink } from "react-router";

import brandLogo from "../assets/logo.png";
import githubIcon from "../assets/git_hub.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start lg:mx-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 block transition duration-200 ${
                  isActive
                    ? "text-purple-600 font-semibold underline underline-offset-4"
                    : "text-gray-700 hover:underline hover:underline-offset-4"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/allapps"
              className={({ isActive }) =>
                `px-4 py-2 block transition duration-200 ${
                  isActive
                    ? "text-purple-600 font-semibold underline underline-offset-4"
                    : "text-gray-700 hover:underline hover:underline-offset-4"
                }`
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installedApps"
              className={({ isActive }) =>
                `px-4 py-2 block transition duration-200 ${
                  isActive
                    ? "text-purple-600 font-semibold underline underline-offset-4"
                    : "text-gray-700 hover:underline hover:underline-offset-4"
                }`
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={brandLogo} alt="Brand Logo" className="h-10 w-auto" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hidden sm:block">
            HERO.IO
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 font-semibold transition ${
                isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#632EE3] decoration-2 underline-offset-4"
                  : "text-gray-700 hover:underline hover:decoration-[#632EE3] hover:decoration-2 hover:underline-offset-4"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/allapps"
            className={({ isActive }) =>
              `px-3 py-2 font-semibold transition ${
                isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#632EE3] decoration-2 underline-offset-4"
                  : "text-gray-700 hover:underline hover:decoration-[#632EE3] hover:decoration-2 hover:underline-offset-4"
              }`
            }
          >
            Apps
          </NavLink>

          <NavLink
            to="/installedApps"
            className={({ isActive }) =>
              `px-3 py-2 font-semibold transition ${
                isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#632EE3] decoration-2 underline-offset-4"
                  : "text-gray-700 hover:underline hover:decoration-[#632EE3] hover:decoration-2 hover:underline-offset-4"
              }`
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end lg:mx-10 hidden lg:flex">
        <NavLink
          to="https://github.com/tanvir81"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-5 h-5 object-contain"
          />
          Contribute
        </NavLink>
      </div>

      <div className="navbar-end lg:hidden">
        <NavLink
          to="https://github.com/tanvir81"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-5 h-5 object-contain"
          />
          Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

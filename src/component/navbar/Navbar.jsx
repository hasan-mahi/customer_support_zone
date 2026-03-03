import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tickets</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li className="mt-2">
              <button className="btn btn-primary btn-sm w-full">
                New Ticket
              </button>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold ml-2">CS — Ticket System</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-2">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className="btn btn-primary btn-sm ml-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
              + New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

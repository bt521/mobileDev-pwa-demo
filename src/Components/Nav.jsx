import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Nav({ download }) {
  const location = useLocation();

  return (
    <div className="navbar border-b bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/extract">Extract</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
            <li>
              <a href="/sensors">Sensors</a>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl font-semibold font-poppins">
          ColorSiphon
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/extract">Extract</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
          <li>
            <a href="/sensors">Sensors</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {location.pathname != "/" && (
          <button className="btn btn-info" onClick={download}>
            Download PWA
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;

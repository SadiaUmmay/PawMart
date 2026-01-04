import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/pet4.png"
const Navbar = () => {
  const { user, handlesingout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Theme state with localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme
  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // Handle logout
  const handleSignOut = () => {
    if (handlesingout) {
      handlesingout()
        .then(() => {
          console.log("User logged out successfully");
          navigate("/");
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    }
  };

  // Navigation links
  const navLinks = (
    <>
      {/* Public Routes */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-b-2 border-primary"
              : "hover:text-primary transition-colors"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-bold border-b-2 border-primary"
              : "hover:text-primary transition-colors"
          }
        >
          Pets & Supplies
        </NavLink>
      </li>

      {/* Private Routes */}
      {user && (
        <>
          <li>
            <NavLink
              to="/addlisting"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary transition-colors"
              }
            >
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mylistings"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary transition-colors"
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myorder"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary transition-colors"
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-xl sticky top-0 z-50 border-b border-base-300">
    <div className="navbar-start">
      {/* Mobile menu */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden hover:bg-primary/10 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content mt-3 z-1 p-3 shadow-2xl bg-base-100 rounded-box w-56 border border-base-300"
        >
          {navLinks}
        </ul>
      </div>
  
      {/* Logo */}
      <Link to="/" className="btn btn-ghost px-2 ">
        <div className="relative group">
          <img 
            src={logo} 
            alt="PawMart Logo" 
            className="md:w-12 md:h-12 w-10 h-10 transition-transform group-hover:scale-110 duration-300" 
          />
        </div>
        <div className="flex flex-col items-start ml-3">
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PawMart
          </span>
          <span className="text-xs text-base-content/60 -mt-1">
            Pet Paradise
          </span>
        </div>
      </Link>
    </div>
  
    {/* Desktop Navigation  */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-1">
        {navLinks}
      </ul>
    </div>
  
    {/* Right Section  */}
    <div className="navbar-end gap-3">
      {/* Theme Toggle */}
      <div className="tooltip tooltip-bottom" data-tip={theme === "dark" ? "Switch to light" : "Switch to dark"}>
        <label className="swap swap-rotate btn btn-ghost btn-circle hover:bg-primary/10">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleToggle}
            className="theme-controller"
          />
          {/* Sun icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.5,5.5,0,0,0,12,6.5Z" />
          </svg>
          {/* Moon icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
  
      {/* User Authentication  */}
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary/20 transition-all"
          >
            <div className="w-10 rounded-full ring-2 ring-primary/10">
              <img
                alt={user.displayName || "User"}
                src={
                  user.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-1 p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-base-300"
          >
            <li className="px-4 py-2 border-b border-base-300 mb-1">
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{user.displayName || "User"}</span>
                <span className="text-xs text-base-content/60 truncate">{user.email}</span>
              </div>
            </li>
            <li>
              <Link to="/profile" className="justify-between hover:bg-primary/10 hover:text-primary transition-colors">
                Profile
                <span className="badge badge-primary">New</span>
              </Link>
            </li>
            <li>
              <Link to="/mylistings" className="hover:bg-primary/10 hover:text-primary transition-colors">
                My Listings
              </Link>
            </li>
            <li>
              <Link to="/myorder" className="hover:bg-primary/10 hover:text-primary transition-colors">
                My Orders
              </Link>
            </li>
            <li className="divider my-1"></li>
            <li>
              <button
                onClick={handleSignOut}
                className="text-error font-medium hover:bg-error/10 transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-primary btn-sm rounded-full px-5 hover:scale-105 transition-transform">
            Login
          </Link>
          <Link to="/signup" className="btn btn-outline btn-primary btn-sm rounded-full px-5 hover:scale-105 transition-transform">
            Register
          </Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default Navbar;

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
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile menu */}
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
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="md:w-15 md:h-15 w-10 h-10"><img src={logo} alt="" /></span>
          <span className="font-bold text-primary ml-2">PawMart</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-4">
        {/* Theme Toggle */}
        <label className="cursor-pointer grid items-center group">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleToggle}
            className="toggle toggle-lg bg-white border-black peer shadow-lg"
          />
          <div className="relative w-full h-full pointer-events-none">
          </div>
        </label>

        {/* User Authentication */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
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
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/mylistings">My Listings</Link>
              </li>
              <li>
                <Link to="/myorder">My Orders</Link>
              </li>
              <li className="divider my-1"></li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-error font-medium"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline btn-primary btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

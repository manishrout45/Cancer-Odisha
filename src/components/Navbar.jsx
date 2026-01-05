import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `lp-nav-link transition ${
      isActive
        ? "text-[#9D41E4] font-semibold border-b-2 border-[#9D41E4]"
        : "text-gray-700 hover:text-[#9D41E4]"
    }`;

  return (
    <header className="lp-navbar fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-gray-800">
              Cancer<span className="text-[#9D41E4]">Odisha</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/department" className={navLinkClass}>Department</NavLink>
            <NavLink to="/doctors" className={navLinkClass}>Doctors</NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            <NavLink to="/news" className={navLinkClass}>News</NavLink>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiPhone className="text-[#9D41E4]" />
              <span>Call Now:</span>
              <strong className="text-gray-800">+91 98765 43210</strong>
            </div>

            <NavLink
              to="/appointment"
              className="btn-slide attention bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Book Appointment
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-5 py-6 text-sm">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/department" onClick={() => setIsOpen(false)} className={navLinkClass}>Department</NavLink>
          <NavLink to="/doctors" onClick={() => setIsOpen(false)} className={navLinkClass}>Doctors</NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/news" onClick={() => setIsOpen(false)} className={navLinkClass}>News</NavLink>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500 mb-2">Call Now</p>
            <p className="font-semibold text-gray-800">
              +91 98765 43210
            </p>
          </div>

          <NavLink
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="btn-slide attention mt-4 bg-indigo-500 text-center py-2 rounded-full font-semibold text-white"
          >
            Book Appointment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

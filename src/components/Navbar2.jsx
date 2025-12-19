import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lp-navbar fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg" // replace with your logo
              alt="CancerOdisha"
              className="h-10"
            />
            <span className="text-xl font-semibold text-gray-800">
              Cancer<span className="text-cyan-600">Odisha</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="lp-nav-link active">Home</a>

            <div className="relative group">
              <span className="lp-nav-link cursor-pointer">Pages</span>
              <div className="lp-dropdown">
                <a href="#">About Us</a>
                <a href="#">Pricing</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            <div className="relative group">
              <span className="lp-nav-link cursor-pointer">Department</span>
              <div className="lp-dropdown">
                <a href="#">Oncology</a>
                <a href="#">Radiology</a>
                <a href="#">Cardiology</a>
              </div>
            </div>

            <div className="relative group">
              <span className="lp-nav-link cursor-pointer">Doctors</span>
              <div className="lp-dropdown">
                <a href="#">Doctor List</a>
                <a href="#">Doctor Details</a>
              </div>
            </div>

            <a href="#" className="lp-nav-link">Portfolio</a>

            <div className="relative group">
              <span className="lp-nav-link cursor-pointer">News</span>
              <div className="lp-dropdown">
                <a href="#">Blog</a>
                <a href="#">Blog Details</a>
              </div>
            </div>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiPhone className="text-cyan-600" />
              <span>Call Now:</span>
              <strong className="text-gray-800">+91 98765 43210</strong>
            </div>

            <a
              href="#"
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Book Appointment
            </a>
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

        <nav className="flex flex-col gap-4 px-5 py-6 text-gray-700 text-sm">
          <a href="#">Home</a>
          <a href="#">Pages</a>
          <a href="#">Department</a>
          <a href="#">Doctors</a>
          <a href="#">Portfolio</a>
          <a href="#">News</a>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500 mb-2">Call Now</p>
            <p className="font-semibold text-gray-800">
              +91 98765 43210
            </p>
          </div>

          <a
            href="#"
            className="mt-4 bg-lime-400 text-center py-2 rounded-full font-semibold text-gray-900"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

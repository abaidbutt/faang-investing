import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Using react-icons for the hamburger menu

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-white md:shadow-sm py-4 relative">
      <div className="container mx-auto flex md:justify-between items-center justify-end">
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center w-full justify-start">
          <img
            src="/clubs-logo.png"
            alt="StockClub Icon"
            className="h-8 md:mr-2 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:space-x-4 space-x-2">
          <Link
            href="/#app"
            className="text-gray-700 font-semibold text-primary"
          >
            App
          </Link>
          <Link
            href="/#security"
            className="text-gray-700 font-semibold text-primary"
          >
            Security
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 font-semibold text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-primary">
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isNavOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/#app"
                className="text-gray-700 font-semibold text-primary"
                onClick={toggleNav}
              >
                App
              </Link>
            </li>
            <li>
              <Link
                href="/#security"
                className="text-gray-700 font-semibold text-primary"
                onClick={toggleNav}
              >
                Security
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-gray-700 font-semibold text-primary"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {/* Mobile Logo */}
      <div className="md:hidden flex items-center w-full justify-center">
        <img
          src="/mobile-logo.png"
          alt="StockClub Icon"
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;

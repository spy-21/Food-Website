import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-800 shadow fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-18 w-18 rounded-full "
          />
          {/* <span className="font-bold text-amber-500 text-lg">spy</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-md font-medium text-amber-500 hover:text-slate-600"
          >
            Home
          </Link>
          <Link
            to="/items"
            className="text-md font-medium text-amber-500 hover:text-slate-600"
          >
            Items
          </Link>
          <Link
            to="/about"
            className="text-md font-medium text-amber-500 hover:text-slate-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-md font-medium text-amber-500 hover:text-slate-600"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-amber-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-amber-500 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/items"
            className="block text-amber-500 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Items
          </Link>
          <Link
            to="/about"
            className="block text-amber-500 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-amber-500 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

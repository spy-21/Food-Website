import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-amber-500 shadow fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="font-bold text-white-900">spy</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/items"
            className="text-sm font-medium text-white hover:text-indigo-600"
          >
            Items
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-white hover:text-indigo-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-white hover:text-indigo-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

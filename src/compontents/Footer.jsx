import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 ">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Food Recipe</h1>
        <p className="text-sm">
          Find the best recipes for your favorite dishes!
        </p>
        <div className="mt-4 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Food Recipe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

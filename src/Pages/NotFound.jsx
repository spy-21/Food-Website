import React from "react";
import Card from "../compontents/Card";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <a
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>

      <Card />
    </>
  );
};

export default NotFound;

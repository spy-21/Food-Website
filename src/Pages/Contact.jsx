import React from "react";

const Contact = () => {
  return (
    <div className="contact mt-16 px-4 max-w-7xl  flex flex-row justify-center items-center mx-auto">
      <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 h-48">
        <h1 className="text-3xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">
          If you have any questions or feedback, feel free to reach out!
        </p>
      </div>

      <form className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-[700px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-[700px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-[700px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-[700px] bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

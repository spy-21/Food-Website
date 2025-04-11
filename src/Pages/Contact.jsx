import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_olhsd6l", // e.g. "service_abc123"
        "template_6b2dol3", // e.g. "template_xyz456"
        form.current,
        "3UGrNyieqvAI9P3sA" // e.g. "ABC123DEF456..."
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="mt-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Info Block */}
      <div className="bg-gray-100 shadow-md rounded-lg py-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center text-gray-600">
          If you have any questions or feedback, feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-1/2"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

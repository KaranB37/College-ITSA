import React from "react";
import "../Component.css";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="bg-transparent" id="contact">
    <div className="flex items-center justify-center h-3/4">
      <div className="bg-transparent p-8 rounded-lg shadow-md w-[600px]"> {/* Increase the width */}
        <h1 className=" flex items-center justify-center text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-white">
          Contact Us
        </h1>
        <div className="light-saber2"></div>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-medium text-white text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 p-3 border rounded w-full focus:ring focus:ring-indigo-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-white text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-3 border rounded w-full focus:ring focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-white text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 p-3 border rounded w-full h-24 focus:ring focus:ring-indigo-400"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded hover:opacity-90 focus:outline-none focus:ring focus:ring-indigo-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  );
}

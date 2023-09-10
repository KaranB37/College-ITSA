import React from "react";

export default function Contact() {
  return (
    <div>
    <section className="h-screen flex items-center justify-center">
      <div className="bg-transparent p-8 rounded-lg shadow-md w-[600px]">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-white text-center">
          Feedback Form
        </h1>
        <div className="light-saber2"></div>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">
              Name
            </label>
            <input
              type="text"
              className="mt-1 p-3 border rounded w-full focus:ring focus:ring-indigo-400 bg-transparent text-white"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-3 border rounded w-full focus:ring focus:ring-indigo-400 bg-transparent text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-white">
              Message
            </label>
            <textarea
              className="mt-1 p-3 border rounded w-full h-24 focus:ring focus:ring-indigo-400 bg-transparent text-white"
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
    </section>
    </div>
  );
}

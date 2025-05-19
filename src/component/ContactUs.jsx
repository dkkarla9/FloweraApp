import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Side: Image & Description */}
      <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-10">
        <div className="text-center md:text-left max-w-md">
          <img
            src="https://images.unsplash.com/photo-1698593975674-d122a7b781aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury"
            className="rounded-2xl mb-6 shadow-xl w-full object-cover"
          />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We're here to help with your luxury shopping experience. Whether it’s a question, suggestion, or feedback, we’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200  px-2 md:px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

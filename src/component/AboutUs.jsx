import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 flex items-center justify-center bg-[#D1C2A1] p-10">
        <img
          src="https://images.unsplash.com/photo-1643168343047-f1056f97e555?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Story"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover"
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-[#2C3E50] mb-4">About Us</h2>
          <p className="text-lg text-[#5D6D7E] mb-6">
            Welcome to <span className="font-semibold text-[#D4AF37]">FlowerShop</span> — where style meets innovation. We’re more than just an online store; we’re a team of passionate creators dedicated to curating the finest in fashion, lifestyle, and design.
          </p>

          <p className="text-[#5D6D7E] mb-6">
            Founded in 2024, Ecmore started with a simple mission: to deliver high-quality, trend-forward products while providing a seamless, luxurious shopping experience.
          </p>

          <p className="text-[#5D6D7E] mb-6">
            Whether you're looking for the perfect wardrobe update or that one piece that defines your style, we're here to help you feel confident and inspired — every day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#D4AF37] rounded-full"></span>
              <p className="text-sm text-[#5D6D7E] font-medium">Fast & Reliable Delivery</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#D4AF37] rounded-full"></span>
              <p className="text-sm text-[#5D6D7E] font-medium">Customer-Centric Service</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#D4AF37] rounded-full"></span>
              <p className="text-sm text-[#5D6D7E] font-medium">Ethically Sourced Materials</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-[#D4AF37] rounded-full"></span>
              <p className="text-sm text-[#5D6D7E] font-medium">Secure Payment Options</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/shop"
              className="inline-block bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#F1C40F] transition duration-300"
            >
              Explore Our Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

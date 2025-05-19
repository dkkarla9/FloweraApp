import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  
    return (
    <div className="bg-[#F6F5F3] min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Privacy Policy"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => console.error('Failed to load privacy policy image')}
        />
        <div className="absolute inset-0 bg-[#2C3E50]/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] drop-shadow-md">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-12">
        <div className="bg-[#FFFFFF] rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-sm text-[#5D6D7E] mb-6 leading-relaxed">
            At ShopLux, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            1. Information We Collect
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            We collect personal information you provide, such as name, email, address, and payment details, when you place an order or contact us.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            2. How We Use Your Information
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            Your information is used to process orders, improve our services, and send promotional offers (if you opt in). We do not sell your data to third parties.
          </p>

          <p className="text-sm text-[#5D6D7E] leading-relaxed">
            For questions, contact us at <Link to="/contact" className="text-[#D4AF37] hover:text-[#F1C40F] transition duration-200">support@shoplux.com</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
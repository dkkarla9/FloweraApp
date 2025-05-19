import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F6F5F3] min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Terms and Conditions"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2C3E50]/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] drop-shadow-md">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-12">
        <div className="bg-[#FFFFFF] rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">
            Welcome to ShopLux
          </h2>
          <p className="text-sm text-[#5D6D7E] mb-6 leading-relaxed">
            These Terms and Conditions govern your use of our website and services. By accessing or purchasing from ShopLux, you agree to these terms.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            1. Use of Our Website
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            You agree to use our website for lawful purposes only. You may not reproduce, distribute, or modify any content without our permission.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            2. Purchases and Payments
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            All prices are in USD and subject to change. We accept major credit cards and secure payment methods. Orders are processed upon payment confirmation.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            3. Shipping and Delivery
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            We aim to ship orders within 3-5 business days. Delivery times vary by location. Tracking information will be provided upon shipment.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            4. Returns and Refunds
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            Returns are accepted within 30 days for unused items in original packaging. Refunds are processed within 7-10 business days. Contact <Link to="/contact" className="text-[#D4AF37] hover:text-[#F1C40F] transition duration-200">support@shoplux.com</Link> for assistance.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            5. Limitation of Liability
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-4 leading-relaxed">
            ShopLux is not liable for any indirect, incidental, or consequential damages arising from your use of our website or products.
          </p>

          <h3 className="text-lg font-medium text-[#2C3E50] mb-3">
            6. Changes to Terms
          </h3>
          <p className="text-sm text-[#5D6D7E] mb-6 leading-relaxed">
            We may update these terms at any time. Changes will be posted on this page, and continued use constitutes acceptance.
          </p>

          <p className="text-sm text-[#5D6D7E] leading-relaxed">
            For questions, contact us at <Link to="/contact" className="text-[#D4AF37] hover:text-[#F1C40F] transition duration-200">support@shoplux.com</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
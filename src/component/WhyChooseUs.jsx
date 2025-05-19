import React from 'react';
import { FaGem, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaGem className="text-[#D4AF37] text-3xl mb-4" />,
      title: 'Premium Quality',
      description: 'Our products are crafted with the finest materials for lasting elegance.',
    },
    {
      icon: <FaShieldAlt className="text-[#D4AF37] text-3xl mb-4" />,
      title: 'Trusted Excellence',
      description: 'Shop with confidence, backed by our commitment to excellence.',
    },
    {
      icon: <FaTruck className="text-[#D4AF37] text-3xl mb-4" />,
      title: 'Fast Shipping',
      description: 'Enjoy swift and reliable delivery to your doorstep.',
    },
    {
      icon: <FaHeadset className="text-[#D4AF37] text-3xl mb-4" />,
      title: 'Exceptional Support',
      description: 'Our dedicated team is here to assist you every step of the way.',
    },
  ];

  return (
    <div className=" bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-100  rounded-lg shadow-xl p-6 text-center hover:shadow-md transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[#5D6D7E] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your shipping policy?',
      answer:
        'We offer fast and reliable shipping within 3-5 business days for most regions. Free shipping is available on orders over $50. International shipping options are also available.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 30 days of purchase for unused items in original packaging. Please contact support@shoplux.com to initiate a return. Refunds are processed within 7-10 business days.',
    },
    {
      question: 'How do I track my order?',
      answer:
        'Once your order ships, you’ll receive a tracking number via email. You can use this number on our website or the carrier’s site to track your package in real-time.',
    },
    {
      question: 'Are your products authentic?',
      answer:
        'Yes, all our products are 100% authentic and sourced directly from trusted manufacturers. We guarantee premium quality and craftsmanship.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Our dedicated support team is available 24/7 via email (support@shoplux.com) or phone (+1 (555) 123-4567). We’re here to assist with any questions or concerns.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-lg shadow-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left text-[#2C3E50] hover:bg-[#AAB7B8]/10 transition duration-200"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#D4AF37] text-sm" />
                ) : (
                  <FaChevronDown className="text-[#D4AF37] text-sm" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 p-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-[#5D6D7E] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
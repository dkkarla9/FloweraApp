import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5D6D7E] py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="text-[#AAB7B8] text-sm space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-[#D4AF37]" size={14} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#D4AF37]" size={14} />
                support@shoplux.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[#D4AF37]" size={14} />
                123 Elegance St, Luxury City
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="text-[#AAB7B8] text-sm space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#D4AF37] transition duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#D4AF37] transition duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms&condition"
                  className="hover:text-[#D4AF37] transition duration-200"
                >
                  Terms & condition
                </Link>
              </li>
               <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#D4AF37] transition duration-200"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-[#AAB7B8] text-sm mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 text-sm bg-white border border-[#BDC3C7] rounded-l-md focus:outline-none focus:border-[#D4AF37] transition duration-200"
              />
              <button className="p-2 bg-[#D4AF37] text-white rounded-r-md hover:bg-[#F1C40F] transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#BDC3C7]/50 text-center">
          <p className="text-sm text-[#AAB7B8]">
            © {new Date().getFullYear()} ShopLux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
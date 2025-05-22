import React from "react";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 px-6 md:px-16 py-16 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4">BoozGlobe</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the world's finest spirits — one sip, one story at a time. Crafted for connoisseurs and the curious alike.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>Mumbai, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <span>support@boozglobe.com</span>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Explore</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Cultures</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} <span className="text-white">BoozGlobe</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
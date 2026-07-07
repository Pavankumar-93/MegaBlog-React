import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <Logo width="70px" />
            <h2 className="text-2xl font-bold text-white mt-4">MegaBlog</h2>
            <p className="mt-4 text-gray-400 leading-7">
              Share your ideas, read amazing articles, and explore the world
              through blogging.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/all-posts"
                  className="hover:text-indigo-400 transition"
                >
                  All Posts
                </Link>
              </li>

              <li>
                <Link
                  to="/add-post"
                  className="hover:text-indigo-400 transition"
                >
                  Add Post
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">Company</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">Legal</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Cookies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 MegaBlog. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm mt-3 md:mt-0">
              Built with ❤️ using React, Appwrite & Tailwind CSS
            </p>
          </div>

          {/* Designer Credit */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-500">
              Designed & Developed by{" "}
              <span className="font-semibold text-indigo-400 hover:text-indigo-300 transition duration-300">
                PAVAN KUMAR.Y
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

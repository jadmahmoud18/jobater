import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-10"
      />
      <motion.div
        initial={{ x: -100, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl -top-32 -left-32"
      />
      <motion.div
        initial={{ x: 100, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl -bottom-32 -right-32"
      />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Jobater</h3>
            <p className="text-sm text-gray-400">
              Jobater is your ultimate career partner, offering tools and
              resources to help you build your resume, find jobs, and grow your
              career.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <FaFacebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/about"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/careers"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Careers
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/blog"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/pricing"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Pricing
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/faq"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  FAQ
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/resume-builder"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Resume Builder
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/job-bank"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Job Bank
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/career-guide"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Career Guide
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/success-stories"
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  Success Stories
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center group cursor-pointer space-x-2">
                <EnvelopeIcon className="h-5 w-5 group-hover:text-gray-200 text-gray-400" />
                <span className="text-sm text-gray-400">
                  <a
                    href="mailto:support@jobater.com"
                    className="group-hover:text-gray-200"
                  >
                    support@jobater.com
                  </a>
                </span>
              </li>
              <li className="flex items-center group cursor-pointer space-x-2">
                <PhoneIcon className="h-5 w-5 group-hover:text-gray-200  text-gray-400" />
                <span className="text-sm group-hover:text-gray-200 text-gray-400">
                  <a
                    href="tel:+11234567890"
                    className="group-hover:text-gray-200"
                  >
                    +1 (123) 456-7890
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-400">
                  123 Career St, Job City
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jobater. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

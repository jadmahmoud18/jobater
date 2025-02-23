import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  XIcon, // Use XIcon instead of TwitterIcon
  InstagramIcon,
  YouTubeIcon,
} from "../assets/SocialIcons.jsx"; // Replace with your social media icons

export default function Footer() {
  return (
    <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        {/* Moving Circles */}
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        />

        {/* Moving Lines */}
        <motion.div
          initial={{ x: -200, rotate: 45 }}
          animate={{ x: [0, 200, 0], rotate: [45, -45, 45] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute top-1/2 left-0 w-64 h-1 bg-blue-600/20"
        />
        <motion.div
          initial={{ x: 200, rotate: -45 }}
          animate={{ x: [0, -200, 0], rotate: [-45, 45, -45] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute top-1/3 right-0 w-64 h-1 bg-purple-700/20"
        />
      </motion.div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center mb-12"
      >
        <img
          src="/500-no-bg.png" // Replace with your logo path
          alt="Jobater Logo"
          className="h-24 w-24 rounded-lg" // Adjust size and styling as needed
        />
      </motion.div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/about?ref=bottom"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers?ref=bottom"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://www.forum.jobater.com/?ref=bottom"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Forum
                </a>
              </li>
              <li>
                <a
                  href="/news?ref=bottom"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Latest News
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <a href="mailto:info@jobater.com">info@jobater.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://facebook.com/JobaterLLC"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/JobaterLLC"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <XIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/jobaterllc"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@jobaterllc"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <YouTubeIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Jobater LLC. All rights reserved.
          </p>
          <br></br>
          <p>
            See{" "}
            <a
              href="/docs/terms-and-conditions?ref=bottom"
              className="hover:text-purple-600 transition-all text-gray-100"
            >
              Terms & Conditions
            </a>
            ,{" "}
            <a
              href="/docs/policies?ref=bottom"
              className="hover:text-purple-600 transition-all text-gray-100"
            >
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

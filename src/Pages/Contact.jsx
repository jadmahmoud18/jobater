import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
} from "../assets/SocialIcons.jsx"; // Replace with your social media icons

export default function ContactPage() {
  return (
    <div className="bg-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
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

        {/* Hero Content */}
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Have questions or need assistance? Reach out to us—we&#39;re here to
            help!
          </motion.p>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form (Left Column) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information (Right Column) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a
                      href="mailto:info@jobater.com"
                      className="text-gray-300 hover:text-purple-600 transition-colors duration-200"
                    >
                      info@jobater.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-purple-600 transition-colors duration-200"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://facebook.com/JobaterLLC"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <FacebookIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://x.com/JobaterLLC"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <XIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/jobaterllc"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@jobaterllc"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <YouTubeIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

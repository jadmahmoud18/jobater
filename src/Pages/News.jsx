import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import {
  NewspaperIcon,
  SparklesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

import useDocumentTitle from "../helpers/useDocumentTitle.jsx";

export default function NewsPage() {
  useDocumentTitle("News - Jobater");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Jobater Launches AI-Powered Resume Builder",
      description:
        "Our new AI-powered resume builder is now live! Create professional resumes in minutes and increase your chances of landing your dream job.",
      date: "October 10, 2023",
      icon: SparklesIcon,
    },
    {
      id: 2,
      title: "Global Job Bank Expands to 50+ Countries",
      description:
        "Jobater's Global Job Bank now connects job seekers with opportunities in over 50 countries worldwide.",
      date: "September 25, 2023",
      icon: LightBulbIcon,
    },
    {
      id: 3,
      title: "Enterprise HR Solutions Now Available",
      description:
        "Businesses can now streamline their hiring processes with Jobater's AI-powered applicant filtering and employee management tools.",
      date: "September 10, 2023",
      icon: NewspaperIcon,
    },
  ];

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
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Stay updated with the latest announcements, features, and news from
            Jobater.
          </motion.p>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl text-center"
          >
            What&#39;s New at Jobater?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center"
          >
            Explore the latest updates and announcements from Jobater.
          </motion.p>

          {/* News Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => {
              const Icon = news.icon;
              return (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-purple-600 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {news.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-300">
                    {news.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-400">{news.date}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Subscribe to our newsletter to receive the latest news and updates
            directly in your inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <form className="flex justify-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

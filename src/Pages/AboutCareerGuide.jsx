import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import {
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function CareerGuidePage() {
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
            Career Guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Get personalized career advice and guidance to help you navigate
            your professional journey and achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.account.jobater.com/apps/career-guide?ref=about3" // Link to the actual career guide tool
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Career Advice
            </a>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl text-center"
          >
            Why Choose Our Career Guidance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center"
          >
            Our career guidance services are designed to help you make informed
            decisions and achieve your professional goals.
          </motion.p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LightBulbIcon,
                title: "Personalized Advice",
                description:
                  "Receive tailored career advice based on your skills, interests, and goals.",
              },
              {
                icon: UserGroupIcon,
                title: "Expert Mentors",
                description:
                  "Connect with experienced mentors who can guide you through your career journey.",
              },
              {
                icon: SparklesIcon,
                title: "AI-Powered Insights",
                description:
                  "Leverage AI to gain insights into career trends and opportunities.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-4"
              >
                <div className="p-4 bg-purple-600 rounded-full">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
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
            Ready to Take the Next Step?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Start your career journey today with personalized guidance and
            expert advice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.account.jobater.com/apps/career-guide?ref=about3" // Link to the actual career guide tool
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

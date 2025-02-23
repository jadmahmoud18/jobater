import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import {
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function EnterprisePage() {
  const features = [
    {
      icon: BriefcaseIcon,
      title: "HR Dashboard",
      description:
        "Streamline your hiring process with our intuitive HR dashboard, designed to manage job postings, applications, and candidate tracking.",
    },
    {
      icon: UserGroupIcon,
      title: "AI-Powered Applicant Filtering",
      description:
        "Leverage AI to filter and rank applicants based on skills, experience, and cultural fit, saving you time and effort.",
    },
    {
      icon: ChartBarIcon,
      title: "Employee Management",
      description:
        "Efficiently manage your team with tools for performance tracking, feedback, and career development.",
    },
    {
      icon: SparklesIcon,
      title: "Custom Solutions",
      description:
        "Tailored HR solutions to meet the unique needs of your business, ensuring scalability and flexibility.",
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
            Enterprise HR Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Build and manage top-tier teams with Jobater&apos;s enterprise HR
            tools. From hiring to employee management, we’ve got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.account.jobater.com/signup?ref=about4&plan=enterprise" // Link to the enterprise signup page
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
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
            Why Choose Jobater Enterprise?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center"
          >
            Our enterprise solutions are designed to help businesses of all
            sizes streamline their HR processes and build high-performing teams.
          </motion.p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
            Ready to Transform Your HR Processes?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Join Jobater Enterprise today and take the first step toward
            building a world-class team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.account.jobater.com/signup?ref=about4&plan=enterprise" // Link to the enterprise signup page
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

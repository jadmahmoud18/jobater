import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component
import {
  DocumentTextIcon,
  BriefcaseIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  const services = [
    {
      icon: DocumentTextIcon,
      title: "AI Resume Builder",
      description:
        "Craft professional resumes in minutes with our AI-powered tool, increasing your chances of landing your dream job.",
      link: "/about/resume-builder?ref=about",
    },
    {
      icon: BriefcaseIcon,
      title: "Global Job Bank",
      description:
        "Explore and apply for jobs worldwide with our advanced job bank, ensuring you find the perfect role.",
      link: "/about/job-bank?ref=about",
    },
    {
      icon: LightBulbIcon,
      title: "Career Guidance",
      description:
        "Get unlimited support to navigate your professional journey and make informed career decisions.",
      link: "/about/career-guidance?ref=about",
    },
    {
      icon: UserGroupIcon,
      title: "Enterprise HR Solutions",
      description:
        "Streamline hiring processes with our AI-powered applicant filtering, employee management tools, and HR dashboard.",
      link: "/about/enterprise-solutions?ref=about",
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
            About Jobater
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Jobater is your ultimate career partner, offering a seamless
            experience for job seekers and businesses alike. With our AI-powered
            tools and global solutions, we empower individuals and organizations
            to achieve their goals.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl text-center"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center"
          >
            Discover the tools and solutions that make Jobater your ultimate
            career partner.
          </motion.p>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

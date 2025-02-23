import { useEffect } from "react";

import { motion } from "framer-motion";
import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component

import useDocumentTitle from "../helpers/useDocumentTitle.jsx";

export default function SuccessStoriesPage() {
  useDocumentTitle("Success Stories - Jobater");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      photo: "https://via.placeholder.com/150", // Placeholder image
      testimonial:
        "Jobater's AI Resume Builder helped me land my dream job at a top marketing firm. The templates are professional, and the AI feedback was incredibly insightful!",
    },
    {
      name: "Michael Carter",
      role: "Software Engineer",
      photo: "https://via.placeholder.com/150", // Placeholder image
      testimonial:
        "Thanks to Jobater's Global Job Bank, I found a remote software engineering role that perfectly matches my skills and career goals. Highly recommend!",
    },
    {
      name: "Emily Davis",
      role: "HR Specialist",
      photo: "https://via.placeholder.com/150", // Placeholder image
      testimonial:
        "Jobater's Enterprise HR Solutions have transformed how we hire and manage talent. The AI-powered applicant filtering saves us so much time!",
    },
    {
      name: "David Martinez",
      role: "Freelance Designer",
      photo: "https://via.placeholder.com/150", // Placeholder image
      testimonial:
        "The Career Guidance feature helped me pivot my career into freelance design. The personalized advice was exactly what I needed to take the leap.",
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
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Hear from real people who transformed their careers and businesses
            with Jobater.
          </motion.p>
        </div>
      </div>

      {/* Stories Section */}
      <div className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl text-center"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center"
          >
            From job seekers to businesses, Jobater has helped thousands achieve
            their goals. Here are some of their stories.
          </motion.p>

          {/* Stories Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stories.map((story, index) => (
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
                <img
                  src={story.photo}
                  alt={story.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-white">{story.name}</h3>
                <p className="text-sm text-gray-400">{story.role}</p>
                <p className="text-sm text-gray-300">{story.testimonial}</p>
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
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg text-gray-300 lg:text-xl 2xl:text-2xl 3xl:text-3xl"
          >
            Join Jobater today and take the first step toward achieving your
            career and business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://www.account.jobater.com/signup?ref=success-stories" // Link to the signup page
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

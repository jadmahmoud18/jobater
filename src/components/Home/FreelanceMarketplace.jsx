import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function FreelanceMarketplace() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative isolate bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
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

      {/* Content */}
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-white sm:text-5xl"
        >
          Freelance Marketplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg text-gray-300"
        >
          Our freelance marketplace is coming soon! Stay tuned for a platform
          that connects talented freelancers with businesses worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/about/freelance-marketplace?ref=news"
            className="bg-purple-700 text-white px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg font-semibold hover:bg-purple-800 transition-colors text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
}

// Add PropTypes validation
FreelanceMarketplace.propTypes = {
  onNotifyMe: PropTypes.func.isRequired, // Validate that onNotifyMe is a function and is required
};

import { motion } from "framer-motion";

function Hero() {
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

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl flex flex-col justify-between items-center gap-8 md:flex-row md:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-4xl text-center font-bold text-white sm:text-5xl md:text-left xl:text-6xl 3xl:text-8xl"
        >
          Your career, <br />
          our{" "}
          <motion.span
            initial={{ color: "#9333ea" }} // Initial color (purple-700)
            animate={{ color: "#1e40af" }} // Animate to blue-800
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="text-purple-700"
          >
            mission
          </motion.span>{" "}
          <br />
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-sm font-normal text-gray-300 lg:text-base 2xl:text-xl 3xl:text-2xl mb-6"
          >
            Jobater is your all-in-one career partner. With our services and
            AI-powered tools, we help you land your dream role as a jobseeker.
            For businesses, we offer full HR solutions to build and manage
            top-tier teams. Discover how we can transform your workforce.
          </motion.p>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4"
          >
            <a
              href="https://account.jobater.com/?ref=cta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </a>
            <a
              href="/about?ref=cta"
              className="bg-purple-700 text-white px-6 py-3 rounded-md text-sm sm:text-base lg:text-lg font-semibold hover:bg-purple-800 transition-colors text-center"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-md"
        >
          <img
            src="https://www.placehold.co/600x400"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
            alt="Hero"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

import { motion } from "framer-motion";

function InfoOne() {
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

      {/* Content */}
      <div className="mx-auto max-w-7xl flex flex-col justify-between items-center gap-8 md:flex-row-reverse md:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-4xl text-center font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl z-10"
        >
          Our Services
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-sm font-normal text-gray-300 lg:text-base 2xl:text-xl 3xl:text-2xl mt-6 text-center"
          >
            <strong>For jobseekers</strong>, from an AI-powered resume builder
            to our advanced global job bank. We help you find your future career
            and more. <strong>For employers and businesses</strong>, we offer
            multiple solutions for HR management and we guarantee that we will
            help you build your best teams.{" "}
            <a
              href="/about?ref=services"
              className="text-blue-500 text-decoration-line: hover:underline hover:text-blue-400"
            >
              Learn more
            </a>
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-md z-10"
        >
          <img
            src="https://www.placehold.co/400x300"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
            alt="Services"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default InfoOne;

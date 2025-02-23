import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import {
  NewspaperIcon,
  BriefcaseIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: NewspaperIcon,
    title: "AI Resume Builder",
    description:
      "Create a standout resume in minutes with our AI-powered tool.",
    href: "/about/resume-builder?ref=features",
  },
  {
    icon: BriefcaseIcon,
    title: "Global Job Bank",
    description:
      "Explore and apply for jobs worldwide with our advanced job bank.",
    href: "/about/job-bank?ref=features",
  },
  {
    icon: LightBulbIcon,
    title: "HR Solutions",
    description:
      "Build and manage top-tier teams with our enterprise HR services.",
    href: "/about/enterprise?ref=features",
  },
];

function Features() {
  const ref = useRef(null); // Ref for the section
  const isInView = useInView(ref, { once: true }); // Detect when the section is in view

  return (
    <div
      ref={ref}
      className="relative isolate bg-gray-900 py-16 px-6 sm:py-24 lg:px-8 overflow-hidden"
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

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-4xl text-center font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl"
      >
        <Typewriter text="Why Jobater?" delay={0.2} isInView={isInView} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-sm font-normal text-gray-300 lg:text-base 2xl:text-xl 3xl:text-2xl mt-6 text-center"
        >
          Discover the tools and solutions that make Jobater your ultimate
          career partner.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.8 + index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-4"
            >
              <div className="p-4 bg-purple-600 rounded-full">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-300 font-semibold">
                {feature.description}
              </p>
              <a
                href={feature.href}
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-semibold hover:underline"
              >
                Learn More
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

import { useEffect, useState } from "react";

function Typewriter({ text, delay = 0, isInView }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the speed of the typewriter effect here
      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {displayText}
    </motion.span>
  );
}

// Prop Types Validation
Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
  isInView: PropTypes.bool.isRequired,
};

export default Features;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "https://www.account.jobater.com/signup?ref=plans&plan=starter",
    priceMonthly: "$0",
    description: "Perfect for individuals just starting their career journey.",
    features: [
      "Limited access to our AI-powered resume builder",
      "One job application per week",
      "Unlimited career guidance",
    ],
    comment: "",
    unavailableFeatures: ["Job Bank matching", "Enterprise integrations"],
    featured: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "https://www.account.jobater.com/signup?ref=plans&plan=professional",
    priceMonthly: "$9.99",
    description: "For professionals looking to accelerate their career growth.",
    features: [
      "Up to 25 resumes with our AI-powered resume builder",
      "Unlimited job applications",
      "Unlimited career guidance",
      "Job Bank matching",
    ],
    comment: "+ 7-day free trial",
    unavailableFeatures: ["Enterprise integrations"],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "about/enterprise?ref=plans",
    priceMonthly: "$299.99*",
    description: "Tailored solutions for businesses and teams.",
    features: [
      "HR Dashboard",
      "Job postings to Jobater Job Bank",
      "AI-powered applicant filtering",
      "AI-powered employee management",
    ],
    comment: "*Negotiable, free trial for new businesses",
    unavailableFeatures: [],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-4xl text-center font-bold text-white sm:text-5xl xl:text-6xl 3xl:text-8xl"
      >
        Pricing Plans
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-sm font-normal text-gray-300 lg:text-base 2xl:text-xl 3xl:text-2xl mt-6 text-center"
        >
          Whether you&#39;re just starting out or scaling your business,
          we&#39;ve got you covered with flexible and affordable plans.
        </motion.p>
      </motion.div>

      {/* Plans Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12"
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.8 + index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className={classNames(
              tier.featured
                ? "bg-gradient-to-b from-purple-600 to-blue-600 shadow-2xl"
                : "bg-gray-800 shadow-lg",
              "rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
            )}
          >
            <div>
              <h3
                className={classNames(
                  tier.featured ? "text-white" : "text-white",
                  "text-2xl font-bold"
                )}
              >
                {tier.name}
              </h3>
              <p
                className={classNames(
                  tier.featured ? "text-indigo-200" : "text-gray-300",
                  "mt-4 text-lg"
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-white",
                    "text-5xl font-bold"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-indigo-200" : "text-gray-400",
                    "text-lg"
                  )}
                >
                  /month
                </span>
              </p>
              {tier.comment && (
                <p
                  className={classNames(
                    tier.featured ? "text-amber-400" : "text-purple-400",
                    "mt-4 text-lg"
                  )}
                >
                  {tier.comment}
                </p>
              )}
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-indigo-100" : "text-gray-300",
                  "mt-8 space-y-4"
                )}
              >
                {/* Render normal features with CheckIcon */}
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-200" : "text-purple-400",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}

                {/* Render unavailable features with XMarkIcon */}
                {tier.unavailableFeatures &&
                  tier.unavailableFeatures.map((unavailableFeature) => (
                    <li
                      key={unavailableFeature}
                      className="flex items-start gap-3 opacity-50"
                    >
                      <XMarkIcon
                        aria-hidden="true"
                        className={classNames(
                          tier.featured ? "text-red-300" : "text-red-500",
                          "h-6 w-5 flex-none"
                        )}
                      />
                      <span>{unavailableFeature}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? "bg-white text-indigo-600 hover:bg-gray-50"
                  : "bg-purple-600 text-white hover:bg-purple-700",
                "mt-8 block w-full rounded-lg px-6 py-3 text-center text-lg font-semibold transition-colors duration-200"
              )}
            >
              {tier.name === "Enterprise" ? "Learn more" : "Get started"}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

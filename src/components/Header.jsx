import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  NewspaperIcon,
  BriefcaseIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const navigation = [
  {
    name: "What we do",
    children: [
      {
        name: "Resume Builder",
        description: "Build a standout resume effortlessly",
        href: "/about/resume-builder?ref=top",
        icon: NewspaperIcon,
      },
      {
        name: "Job Bank",
        description: "Explore and apply for global job opportunities instantly",
        href: "/about/job-bank?ref=top",
        icon: BriefcaseIcon,
      },
      {
        name: "Career Guide",
        description: "Find your future career path",
        href: "/about/career-guide?ref=top",
        icon: LightBulbIcon,
      },
    ],
  },
  {
    name: "For Enterprise",
    href: "/about/enterprise?ref=top",
  },
  {
    name: "Freelance Marketplace",
    href: "https://www.freelance.jobater.com/?ref=top",
  },
  {
    name: "Support",
    children: [
      {
        name: "Forum",
        description: "Join the conversation with peers",
        href: "https://www.forum.jobater.com/?ref=top",
        icon: UserGroupIcon,
      },
      {
        name: "Success Stories",
        description: "Real stories of career triumphs",
        href: "/success-stories?ref=top",
        icon: AcademicCapIcon,
      },
      {
        name: "Contact",
        description: "Get in touch with us",
        href: "/contact?ref=top",
        icon: ChatBubbleOvalLeftEllipsisIcon,
      },
    ],
  },
];

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSignIn = () => {
    setTimeout(() => {
      window.open("https://account.jobater.com/?ref=top", "_blank");
    }, 750);
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/500.png" className="h-24 w-24" alt="Jobater Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <Popover>
                  <PopoverButton className="flex items-center space-x-1 font-semibold text-gray-300 hover:text-white cursor-pointer focus:outline-none transition-colors duration-200">
                    <span className="font-semibold">{item.name}</span>
                    <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                  </PopoverButton>
                  <PopoverPanel className="absolute z-10 mt-2 w-80 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-4 space-y-4"
                    >
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                          >
                            <div className="flex items-center justify-center size-10">
                              <Icon className="size-7 text-gray-400 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-white text-left">
                                {child.name}
                              </p>
                              <p className="text-sm text-gray-400 text-left mt-1">
                                {child.description}
                              </p>
                            </div>
                            {(child.name === "Resume Builder" ||
                              child.name === "Career Guide") && (
                              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                AI
                              </div>
                            )}
                          </Link>
                        );
                      })}
                      {item.name === "What we do" && (
                        <Link
                          to="/about?ref=top"
                          className="flex items-center gap-2 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer"
                        >
                          <InformationCircleIcon className="h-5 w-5" />
                          <span className="font-semibold">Learn More</span>
                        </Link>
                      )}
                    </motion.div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <Link
                  to={item.href}
                  className={`${
                    item.name === "Freelance Marketplace"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 hover:text-gray-50/30 bg-clip-text text-transparent font-bold"
                      : "text-gray-300"
                  } space-x-1 hover:text-white cursor-pointer transition-colors duration-200 font-semibold relative`}
                >
                  {item.name}
                  {item.name === "Freelance Marketplace" && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-md rounded-full -z-10"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Sign In Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignIn}
            className="flex items-center cursor-pointer space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Sign In</span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full text-gray-300 hover:text-white font-semibold cursor-pointer transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="pl-4 space-y-3 border-l border-gray-700 overflow-hidden"
                          >
                            {item.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                                >
                                  <div className="flex items-center justify-center size-10">
                                    <Icon className="size-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-semibold text-white text-left">
                                      {child.name}
                                    </p>
                                    <p className="text-sm text-gray-400 text-left mt-1">
                                      {child.description}
                                    </p>
                                  </div>
                                  {(child.name === "Resume Builder" ||
                                    child.name === "Career Guide") && (
                                    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                      AI
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                            {item.name === "What we do" && (
                              <Link
                                to="/about?ref=top"
                                className="flex items-center gap-2 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 cursor-pointer"
                              >
                                <InformationCircleIcon className="h-5 w-5" />
                                <span className="font-semibold">
                                  Learn More
                                </span>
                              </Link>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        item.name === "Freelance Marketplace"
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-bold"
                          : "text-gray-300"
                      } block hover:text-white cursor-pointer transition-colors duration-200 font-semibold relative`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={handleSignIn}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold w-full"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

import { useRef, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import InfoOne from "../components/Home/InfoOne";
import Features from "../components/Home/Features";
import Plans from "../components/Home/Plans";
import FreelanceMarketplace from "../components/Home/FreelanceMarketplace";
import Footer from "../components/Footer";
import useDocumentTitle from "../helpers/useDocumentTitle.jsx";

function HomePage() {
  const footerRef = useRef(null);

  useDocumentTitle("Home - Jobater");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotifyMe = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
      const newsletterInput = footerRef.current.querySelector(
        "input[type='email']"
      );
      if (newsletterInput) {
        setTimeout(() => newsletterInput.focus(), 500); // Focus after scrolling
      }
    }
  };
  return (
    <>
      <Header />
      <Hero />
      <InfoOne />
      <Features />
      <Plans />
      <FreelanceMarketplace onNotifyMe={handleNotifyMe} />
      <Footer ref={footerRef} />
    </>
  );
}

export default HomePage;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Footer from "./components/tests/1.jsx";
import AboutPage from "./Pages/About.jsx";
import ResumeBuilderPage from "./Pages/AboutResumeBuilder.jsx";
import JobBankPage from "./Pages/AboutJobBank.jsx";
import CareerGuidePage from "./Pages/AboutCareerGuide.jsx";
import EnterprisePage from "./Pages/AboutEnterprise.jsx";
import SuccessStoriesPage from "./Pages/SuccessStories.jsx";
import ContactPage from "./Pages/Contact.jsx";
import CareersPage from "./Pages/Careers.jsx";
import NewsPage from "./Pages/News.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/resume-builder" element={<ResumeBuilderPage />} />
        <Route path="/about/job-bank" element={<JobBankPage />} />
        <Route path="/about/career-guide" element={<CareerGuidePage />} />
        <Route path="/about/enterprise" element={<EnterprisePage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tests" element={<Footer />} />
      </Routes>
    </Router>
  </StrictMode>
);

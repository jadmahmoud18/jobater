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
import AboutLayout from "./helpers/AboutLayout.jsx"; // Import the shared layout

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<AboutPage />} /> {/* /about */}
          <Route path="resume-builder" element={<ResumeBuilderPage />} />{" "}
          {/* /about/resume-builder */}
          <Route path="job-bank" element={<JobBankPage />} />{" "}
          {/* /about/job-bank */}
          <Route path="career-guide" element={<CareerGuidePage />} />{" "}
          {/* /about/career-guide */}
          <Route path="enterprise" element={<EnterprisePage />} />{" "}
          {/* /about/enterprise */}
        </Route>
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

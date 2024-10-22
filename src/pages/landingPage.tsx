import React from "react";
import HeroSection from "../Components/landing-page-component/heroSection";
import WhyUs from "../Components/landing-page-component/why_choose_us_section";
import NavBar from "../Components/landing-page-component/header";
import CoursesSection from "../Components/landing-page-component/CoursesSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="landing_page_container">
        <NavBar />
        <HeroSection />
        <WhyUs />
        <CoursesSection />
        {/* <MultipleItems /> */}
      </div>
    </>
  );
};

export default LandingPage;

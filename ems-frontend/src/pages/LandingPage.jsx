import React, { useEffect } from "react";

import NavBar from "../components/LandingPageComponents/NavBar";
import Hero from "../components/LandingPageComponents/Hero";
import EmsBanner from "../components/LandingPageComponents/EmsBanner";
import Flashcards from "../components/LandingPageComponents/FlashCards";
import Divider from "../components/LandingPageComponents/Divider";
import InsightsSection from "../components/LandingPageComponents/InsightsSection";
import CaseStudyCarousel from "../components/LandingPageComponents/CaseStudyCarousel";
import TrustedBy from "../components/LandingPageComponents/TrustedBy";
import QuickLinks from "../components/LandingPageComponents/QuickLinks";
import HeaderComponent from "../components/HeaderComponent";


const LandingPage = () => {

  useEffect(()=>
  {
document.title = 'EMS-Landing Page'
  }, [])
  return (
    <div>
      <MainContent />
    </div>
  );
};

const MainContent = () => {
  // const location = useLocation();
  const hideHeader =
    location.pathname === "/login"  ;

  return (
    <div className="bg-white">
      { !hideHeader && (
  <>
    <NavBar />
    <Hero />
    <EmsBanner />
    <Flashcards />
    <Divider />
    <InsightsSection />
    <CaseStudyCarousel />
    <TrustedBy />
    <QuickLinks />
    <HeaderComponent />
  </>
)}


     
    </div>
  );
};

export default LandingPage;

import React from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import LeadFormSection from "../components/LeadFormSection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";
import StickyCallBar from "../components/StickyCallBar";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <LeadFormSection />
      <CtaSection />
      <FooterSection />
      <StickyCallBar />
    </div>
  );
}
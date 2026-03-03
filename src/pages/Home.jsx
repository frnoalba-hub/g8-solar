import React from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhySolarSection from "../components/WhySolarSection";
import SavingsCalculator from "../components/SavingsCalculator";
import PanelCleaningSection from "../components/PanelCleaningSection";
import InstallationProcess from "../components/InstallationProcess";
import InstallationGallery from "../components/InstallationGallery";
import CaliforniaNewsSection from "../components/CaliforniaNewsSection";
import CaliforniaProgramsSection from "../components/CaliforniaProgramsSection";
import LeadFormSection from "../components/LeadFormSection";
import FAQSection from "../components/FAQSection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";
import StickyCallBar from "../components/StickyCallBar";
export default function Home() {
  return (
    <div>
      <div className="font-sans">
        <HeroSection />
        <SavingsCalculator />
        <CaliforniaNewsSection />
        <CaliforniaProgramsSection />
        <ProblemSection />
        <WhySolarSection />
        <ServicesSection />
        <HowItWorksSection />
        <PanelCleaningSection />
        <InstallationProcess />
        <InstallationGallery />
        <LeadFormSection />
        <FAQSection />
        <CtaSection />
        <FooterSection />
        <StickyCallBar />
      </div>
    </div>
  );
}
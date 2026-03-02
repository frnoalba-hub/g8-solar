import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhySolarSection from "../components/WhySolarSection";
import SavingsCalculator from "../components/SavingsCalculator";
import PanelCleaningSection from "../components/PanelCleaningSection";
import InstallationGallery from "../components/InstallationGallery";
import CaliforniaNewsSection from "../components/CaliforniaNewsSection";
import CaliforniaProgramsSection from "../components/CaliforniaProgramsSection";
import LeadFormSection from "../components/LeadFormSection";
import FAQSection from "../components/FAQSection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";
import StickyCallBar from "../components/StickyCallBar";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
        <DarkModeToggle dark={dark} onToggle={() => setDark(!dark)} />
        <HeroSection />
        <ProblemSection />
        <WhySolarSection />
        <ServicesSection />
        <HowItWorksSection />
        <SavingsCalculator />
        <PanelCleaningSection />
        <InstallationGallery />
        <CaliforniaNewsSection />
        <CaliforniaProgramsSection />
        <LeadFormSection />
        <FAQSection />
        <CtaSection />
        <FooterSection />
        <StickyCallBar />
      </div>
    </div>
  );
}
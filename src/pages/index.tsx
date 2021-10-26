import * as React from "react";

import { HeroSection } from "./homepage/hero-section";
import { ClientsSection } from "./homepage/clients-section";
import { ServicesSection } from "./homepage/services-section";
import { CaseStudiesSection } from "./homepage/case-studies-section";
import { AcademySection } from "./homepage/academy-section";
import { AboutSection } from "./homepage/about-section";
import { ProcessSection } from "./homepage/process-section";
import { PricingSection } from "./homepage/pricing-section";
import { BottomSection } from "./homepage/bottom-section";

import "@app/styles/home.scss";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <AcademySection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <BottomSection />
    </>
  );
};

export default IndexPage;

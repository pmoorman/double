import * as React from "react";

import {
  PricingSection,
  ProcessSection,
  AboutSection,
  AcademySection,
  CaseStudiesSection,
  HeroSection,
  ClientsSection,
  ServicesSection,
  BottomSection,
} from "@app/page-components/homepage";

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

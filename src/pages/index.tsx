import * as React from "react";

import { HeroSection } from "@app/components/homepage/hero-section";
import { ClientsSection } from "@app/components/homepage/clients-section";
import { ServicesSection } from "@app/components/homepage/services-section";
import { CaseStudiesSection } from "@app/components/homepage/case-studies-section";
import { AcademySection } from "@app/components/homepage/academy-section";
import { AboutSection } from "@app/components/homepage/about-section";
import { ProcessSection } from "@app/components/homepage/process-section";
import { PricingSection } from "@app/components/homepage/pricing-section";
import { BottomSection } from "@app/components/homepage/bottom-section";

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

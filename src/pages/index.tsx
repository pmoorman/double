import * as React from "react";

import { HeroSection } from "@app/page-components/homepage/hero-section";
import { ClientsSection } from "@app/page-components/homepage/clients-section";
import { ServicesSection } from "@app/page-components/homepage/services-section";
import { CaseStudiesSection } from "@app/page-components/homepage/case-studies-section";
import { AcademySection } from "@app/page-components/homepage/academy-section";
import { AboutSection } from "@app/page-components/homepage/about-section";
import { ProcessSection } from "@app/page-components/homepage/process-section";
import { PricingSection } from "@app/page-components/homepage/pricing-section";
import { BottomSection } from "@app/page-components/homepage/bottom-section";

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

import React from "react";

import {
  FunnelsSection,
  HeroSection,
  InfrastructureSection,
  MarketingSection,
  PerformanceSection,
  ClientsSection,
  NavigationMobile,
} from "@app/page-components/services";
import { BottomSection, SEO } from "@app/components";

export const ServicesPage = () => {
  return (
    <>
      <SEO title="Services" />
      <HeroSection />
      <PerformanceSection />
      <FunnelsSection />
      <MarketingSection />
      <InfrastructureSection />
      <ClientsSection />
      <BottomSection
        title="Still here?"
        subtitle="We should talk."
        body="You got this far because the evidence is hard to ignore: we’ve grown businesses and will grow yours, too."
      />
      <NavigationMobile />
    </>
  );
};

export default ServicesPage;

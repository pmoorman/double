import React from "react";

import {
  FunnelsSection,
  HeroSection,
  InfrastructureSection,
  MarketingSection,
  PerformanceSection,
} from "@app/page-components/services";

export const ServicesPage = () => {
  return (
    <>
      <HeroSection />
      <PerformanceSection />
      <FunnelsSection />
      <MarketingSection />
      <InfrastructureSection />
    </>
  );
};

export default ServicesPage;

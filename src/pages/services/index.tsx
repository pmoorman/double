import React from "react";

import {
  FunnelsSection,
  HeroSection,
  InfrastructureSection,
  MarketingSection,
  PerformanceSection,
  ClientsSection,
} from "@app/page-components/services";

export const ServicesPage = () => {
  return (
    <>
      <HeroSection />
      <PerformanceSection />
      <FunnelsSection />
      <MarketingSection />
      <InfrastructureSection />
      <ClientsSection />
    </>
  );
};

export default ServicesPage;

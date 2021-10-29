import React from "react";

import {
  FunnelsSection,
  HeroSection,
  InfrastructureSection,
  MarketingSection,
  PerformanceSection,
  ClientsSection,
} from "@app/page-components/services";
import { BottomSection } from "@app/components";

export const ServicesPage = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesPage;

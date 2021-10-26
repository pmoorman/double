import * as React from "react";

import { HeroSection } from "./homepage/hero-section";
import { ClientsSection } from "./homepage/clients-section";
import { ServicesSection } from "./homepage/services-section";

import "@app/styles/home.scss";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
    </>
  );
};

export default IndexPage;

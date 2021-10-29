import React from "react";

import {
  AboutSection,
  BottomSection,
  GallerySection,
  HeroSection,
  HiringSection,
} from "@app/page-components/about";

export const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <HiringSection />
      <BottomSection />
    </>
  );
};

export default AboutPage;

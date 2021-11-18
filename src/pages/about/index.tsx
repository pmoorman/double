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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <hr style={{ borderTopColor: "#d6dcf3" }} />
          </div>
        </div>
      </div>
      <GallerySection />
      <HiringSection />
      <BottomSection />
    </>
  );
};

export default AboutPage;

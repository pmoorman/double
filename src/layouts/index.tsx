import React, { useEffect } from "react";
import "aos/dist/aos.css";

import { Footer, Header, SEO } from "@app/components";

export const Layout = ({ children }) => {
  let AOS;

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

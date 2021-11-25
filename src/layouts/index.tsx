import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Footer, Header } from "@app/components";

export const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;

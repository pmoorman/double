import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Footer, Header, ParallaxCache } from "@app/components";
import { isBrowser } from "@app/utils";

export const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      {isBrowser() && <ParallaxCache />}
      <Header />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Aos, Footer, Header, ParallaxCache } from "@app/components";
import { isBrowser } from "@app/utils";

export const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      {isBrowser() && <ParallaxCache />}
      {isBrowser() && <Aos />}
      <Header />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { ParallaxProvider, useController } from "react-scroll-parallax";

import { Footer, Header, ParallaxCache } from "@app/components";

export const Layout = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  return (
    <ParallaxProvider>
      {isBrowser && <ParallaxCache />}
      <Header />
      <main>{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { ParallaxProvider, useController } from "react-scroll-parallax";

import { Footer, Header } from "@app/components";

export const Layout = (props) => {
  return (
    <ParallaxProvider>
      <InnerLayout {...props} />
    </ParallaxProvider>
  );
};

const InnerLayout = ({ children }) => {
  const { parallaxController } = useController();

  useEffect(() => {
    setTimeout(() => {
      parallaxController.update();
    }, 150);
  });

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

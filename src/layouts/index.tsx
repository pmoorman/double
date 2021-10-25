import React from "react";
import { Footer, Header, SEO } from "@app/components";

export const Layout = ({ children }) => {
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

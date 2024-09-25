import React from "react";

import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";

const LandingPageLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto h-full w-full">{props.children}</main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;

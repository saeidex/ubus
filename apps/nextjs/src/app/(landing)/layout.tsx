import React from "react";

import { Navbar } from "../_components/navbar";

const LandingPageLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">{props.children}</main>
    </>
  );
};

export default LandingPageLayout;

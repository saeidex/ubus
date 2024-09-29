import { Contact } from "./contact";
import { EssentialFeatures, KeyFeatures } from "./features";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { OurTeam } from "./our-team";
import { Testimonials } from "./testimonials";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <KeyFeatures />
      <EssentialFeatures />
      <Testimonials />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}

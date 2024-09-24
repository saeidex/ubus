import { Contact } from "../_components/contact";
import { EssentialFeatures, KeyFeatures } from "../_components/features";
import { Hero } from "../_components/hero";
import { OurTeam } from "../_components/our-team";
import { Testimonials } from "../_components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <EssentialFeatures />
      <Testimonials />
      <OurTeam />
      <Contact />
    </>
  );
}

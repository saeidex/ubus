import { Contact } from "./_components/contact";
import { EssentialFeatures, KeyFeatures } from "./_components/features";
import { Footer } from "./_components/footer";
import { LandingHeader } from "./_components/header";
import { Hero } from "./_components/hero";
import { OurTeam } from "./_components/our-team";
import { Testimonials } from "./_components/testimonials";

const HomePage = () => {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <KeyFeatures />
        <EssentialFeatures />
        <Testimonials />
        <OurTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

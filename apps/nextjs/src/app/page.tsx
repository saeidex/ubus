import { auth } from "@ubus/auth";

import { Dashboard } from "./_components/dashboard";
import LandingPage from "./_components/landing-page";

const HomePage = async () => {
  const session = await auth();

  if (!session) {
    return <LandingPage />;
  }

  return <Dashboard />;
};

export default HomePage;

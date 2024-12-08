"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../_components/map"), {
  ssr: false,
});

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-dvh w-full rounded-xl p-2">
      <div className="h-full w-full rounded-xl">
        <DynamicMap />
      </div>
    </div>
  );
};

export default Dashboard;

import { BusSchedule } from "~/app/_components/bus-schedule";
import { ClassSchedule } from "~/app/_components/class-schedule";
import { DashboardHeader } from "~/app/_components/header";
import { Sidebar } from "~/app/_components/sidebar";

export default function SchedulePage() {
  return (
    <div className="max-h-dvh p-4">
      <div className="grid h-full grid-cols-[13rem_1fr_1fr] grid-rows-[5rem_1fr] rounded-2xl border">
        <DashboardHeader className="col-span-3" />
        <Sidebar className="row-span-2" />
        <div className="p-4">
          <BusSchedule />
        </div>
        <div className="p-4">
          <ClassSchedule />
        </div>
      </div>
    </div>
  );
}

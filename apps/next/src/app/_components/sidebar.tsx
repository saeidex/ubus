import { cn } from "@ubus/ui";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <aside className={cn("flex h-full w-52 flex-col py-4", className)}>
      <ul className="space-y-2">
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">
          Dashboard
        </li>
        <li className="cursor-pointer bg-gray-700 px-4 py-2 font-bold">
          Schedule
        </li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">Settings</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-700">Support</li>
      </ul>
    </aside>
  );
};

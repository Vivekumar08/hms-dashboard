import React from "react";
import CalenderComponent from "../components/calendar/CalenderComponent";
import SchedulingMetrics from "./SchedulingMetrics";

const SideBar = () => {
  return (
    <div className="flex flex-col  border-black border-2 bg-violet-200 mx-6 h-full">
      <div className="p-4">
        <CalenderComponent />
      </div>
      <div className="p-4">
        <SchedulingMetrics />
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import MetricProgress from "../components/MetricProgress";
import { SlidersHorizontal } from "lucide-react";

const SchedulingMetrics = () => {
  return (
    <div>
      <div className="bg-[#fff] flex items-center gap-4 p-1 rounded-sm border border-gray-400 cursor-pointer m-4">
        <SlidersHorizontal size={32} />
        <p className="text-xl">Key Scheduling TasksMetrics</p>
      </div>
      <div className="flex flex-col mx-4">
        <MetricProgress name={"CircleUserRound"} value={40} />
        <MetricProgress name={"Mail"} value={69} />
        <MetricProgress name={"Phone"} value={55} />
      </div>
    </div>
  );
};

export default SchedulingMetrics;

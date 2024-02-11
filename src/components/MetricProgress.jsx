import React from "react";
import { icons } from "lucide-react";
import CustomProgressBar from "./CustomProgressBar";

const MetricProgress = ({ name, color, size, value }) => {
  const LucideIcon = icons[name];
  return (
    <div className="flex gap-4 justify-start items-center">
      <LucideIcon
        color={color ? color : "#000"}
        size={size ? size : "42"}
        strokeWidth={1}
      />
      <CustomProgressBar
        bgColor={"#eee"}
        color={"blue"}
        maxValue={100}
        value={value}
      />
    </div>
  );
};

export default MetricProgress;

import React from "react";

const CustomProgressBar = ({ color, bgColor, value, maxValue }) => {
  // Calculate the percentage of progress
  const progressPercentage = (value / maxValue) * 100;

  const progressBarStyle = {
    width: `${progressPercentage}%`,
    backgroundColor: color,
    height: "15px",
    borderRadius: "2px",
  };

  const containerStyle = {
    backgroundColor: bgColor,
    borderRadius: "4px",
    padding: "2px",
  };

  return (
    <div className="w-full">
      <div style={containerStyle}>
        <div style={progressBarStyle}></div>
      </div>
    </div>
  );
};

export default CustomProgressBar;

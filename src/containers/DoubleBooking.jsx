import React from "react";
import FilterAppt from "./FilterAppt";
import CardComponent from "../components/CardComponent";

const DoubleBooking = () => {
  return (
    <div className="w-full">
      <FilterAppt />
      <h2>
        <p className="text-lg font-bold">Double Booking Slots</p>
      </h2>
      <CardComponent
        className={"border border-black rounded-3xl w-[80%]  px-3"}
        details={{
          name: "Rohan Babbar",
          time: "11:30-12:00",
          status: "Follow up",
          tag: "10% No Show",
        }}
        tagPosition={"right-14 bottom-0"}
      />
    </div>
  );
};

export default DoubleBooking;

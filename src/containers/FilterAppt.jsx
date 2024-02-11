import React, { useState } from "react";
import InputDropDown from "../components/InputDropDown";
import { CalendarCheck, Filter } from "lucide-react";

const FilterAppt = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelect = (option) => {
    setSelectedValue(option);
  };

  return (
    <div className="w-full flex gap-4 items-center">
      <div className="flex items-center w-full gap-4">
        <CalendarCheck color="#341fd6" size={100} />
        <InputDropDown
          placeholder={"Booking Rate"}
          onSelect={handleSelect}
          options={options}
          selectedValue={selectedValue}
        />
        <InputDropDown
          placeholder={"TimeSlot"}
          onSelect={handleSelect}
          options={options}
          selectedValue={selectedValue}
        />
      </div>
      <div>
        <Filter fill="#341fd6" color="#341fd6" size={40}/>
      </div>
    </div>
  );
};

export default FilterAppt;

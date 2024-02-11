import React, { useState } from "react";
import InputDropDown from "../components/InputDropDown";
import Button from "../components/Button";
import { CalendarRange } from "lucide-react";

const SelectionAppointment = () => {
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
    <div className="w-[85%] flex gap-4 items-center">
      <InputDropDown
        placeholder={"Select Clinic"}
        onSelect={handleSelect}
        options={options}
        selectedValue={selectedValue}
      />
      <Button title={"Add Appointment"} onClick={() => {}} />
      <CalendarRange  size={100} color="#bcbcbc"/>
    </div>
  );
};

export default SelectionAppointment;

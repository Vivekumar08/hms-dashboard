import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

const ThreeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" flex cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? (
        <X color="#61379A" className="text-4xl" size={44} />
      ) : (
        <AlignJustify color="#61379A" className="text-4xl" size={44} />
      )}
    </div>
  );
};

export default ThreeMenu;

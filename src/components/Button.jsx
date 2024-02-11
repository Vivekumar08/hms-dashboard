import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <div
      className={`flex
      cursor-pointer
      items-center justify-center
       h-9 
        text-blue-500 
        border border-blue-500
         px-2 w-full 
         ${className} `}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;

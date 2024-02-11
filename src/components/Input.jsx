import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <div className={`border-slate-500 rounded-md `}>
      <p>{title}</p>
      <input type="text" placeholder={placeholder} />
      
    </div>
  );
};

export default Input;

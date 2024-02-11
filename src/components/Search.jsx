import { Search } from "lucide-react";
import React from "react";

const SearchInput = ({ title,  value, onChange, icon }) => {
  return (
    <div className=" relative flex flex-row w-full  border-2 align-middle items-center border-gray-400">
      {value && <p className="absolute -top-3 px-1 text-sm text-gray-400 left-2 bg-white">{title}</p>}
      {!icon ? (
        <div className="ml-2">
          <Search color="#9CA3AF"/>
        </div>
      ) : null}
      <input
        className={`bg-transparent border-0 border-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 focus:ring-offset-0 focus:outline-none `}
        type="search"
        placeholder={!value ? title : ""}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

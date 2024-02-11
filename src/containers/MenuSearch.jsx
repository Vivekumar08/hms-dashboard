import React, { useState } from "react";
import ThreeMenu from "../components/ThreeMenu";
import Search from "../components/Search";

const MenuSearch = () => {
  const [searchVlaue, setSearchValue] = useState("");
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="flex mx-6 gap-4">
      <ThreeMenu />
      <Search
        placeholder={"Search"}
        title={"Search here"}
        onChange={handleSearchChange}
        value={searchVlaue}
      />
    </div>
  );
};

export default MenuSearch;

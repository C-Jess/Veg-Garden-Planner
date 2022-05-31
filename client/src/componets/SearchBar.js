import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setfilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.plant_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="seachInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filteredData.length !== 0 && (
        <div className="results">
          {!data
            ? null
            : filteredData.slice(0, 15).map((value, key) => {
                return (
                  <div className="item">
                    {" "}
                    <p>{value.plant_name}</p>{" "}
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

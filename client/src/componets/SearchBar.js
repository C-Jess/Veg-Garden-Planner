import React from "react";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="seachInputs">
        <input type="text" placeholder={placeholder} />
      </div>
      <div className="results">
        {!data
          ? null
          : data.map((value, key) => {
              return <div> {value.plant_name} </div>;
            })}
      </div>
    </div>
  );
}

export default SearchBar;

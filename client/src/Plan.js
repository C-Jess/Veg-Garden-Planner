import React from "react";
import "./Plan.css";
import SearchBar from "./componets/SearchBar";

function Plan() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="Plan">
      <SearchBar placeholder="Search for a Plant..." data={data} />
    </div>
  );
}

export default Plan;

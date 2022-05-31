import React from "react";
import "./Select.css";

function Select() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div className="Plan"></div>;
}

export default Select;

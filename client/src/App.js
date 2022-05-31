import React from "react";
import Select from "./Select";

function App() {
  const [plants, setPlants] = React.useState([]);
  return (
    <div className="App">
      <Select plantList={plants} setPlantList={setPlants} />
    </div>
  );
}

export default App;

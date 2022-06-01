import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select from "./views/Select";
import Diary from "./views/Diary";
import Navigation from "./componets/Navigation";

function App() {
  const [plants, setPlants] = React.useState([]);
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              path="select"
              element={<Select plantList={plants} setPlantList={setPlants} />}
            />
            <Route
              path="diary"
              element={<Diary plantList={plants} setPlantList={setPlants} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

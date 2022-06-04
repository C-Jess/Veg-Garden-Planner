import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select from "./views/Select";
import Diary from "./views/Diary";
import Navigation from "./componets/Navigation";
import Settings from "./views/Settings";
import Plan from "./views/Plan";

function App() {
  const [plants, setPlants] = React.useState(() => {
    const saved = localStorage.getItem("plantList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [frostDates, setFrostDates] = React.useState(() => {
    const saved = localStorage.getItem("frostDates");
    return JSON.parse(saved) || { firstFrost: null, lastFrost: null };
  });

  React.useEffect(() => {
    localStorage.setItem("plantList", JSON.stringify(plants));
  }, [plants]);
  React.useEffect(() => {
    localStorage.setItem("frostDates", JSON.stringify(frostDates));
  }, [frostDates]);

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
              element={
                <Diary
                  plantList={plants}
                  frostDates={frostDates}
                  setFrostDates={setFrostDates}
                />
              }
            />
            <Route path="plan" element={<Plan />} />
            <Route
              path="settings"
              element={
                <Settings
                  frostDates={frostDates}
                  setFrostDates={setFrostDates}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

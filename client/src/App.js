import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/plants")
    .then((res) => res.json())
    .then((data) => {
      setData(data[0].plant_name);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!data ? "Loading...": data}
        </p>
      </header>
    </div>
  );
}

export default App;

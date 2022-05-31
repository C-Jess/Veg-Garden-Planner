import React from "react";

function Plant({ plantList, setPlantList, plant }) {
  const handleDelete = () => {
    setPlantList(plantList.filter((item) => item !== plant));
  };

  return (
    <div className="Plant">
      {plant}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Plant;

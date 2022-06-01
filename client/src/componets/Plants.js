import React from "react";

function Plant({ plantList, setPlantList, plantID, plantName }) {
  const handleDelete = () => {
    setPlantList(plantList.filter((element, index) => index !== plantID));
  };

  return (
    <div className="Plant">
      {plantName}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Plant;

import React from "react";
import Button from "react-bootstrap/Button";

function Plant({ plantList, setPlantList, plantID, plantName }) {
  const handleDelete = () => {
    setPlantList(plantList.filter((element, index) => index !== plantID));
  };

  return (
    <div className="Plant">
      {plantName}{" "}
      <Button variant="outline-secondary" size="sm" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default Plant;

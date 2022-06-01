import React from "react";
import Button from "react-bootstrap/Button";

function Plant({
  plantList,
  setPlantList,
  plantID,
  plantName,
  plantProtection,
}) {
  const handleDelete = () => {
    setPlantList(plantList.filter((element, index) => index !== plantID));
  };

  return (
    <div className="Plant">
      {plantName}
      {` (${plantProtection}) `}
      <Button variant="outline-secondary" size="sm" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default Plant;

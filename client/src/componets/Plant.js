import React from "react";
import Button from "react-bootstrap/Button";

function Plant({ plant, handleDelete }) {
  return (
    <div className="Plant">
      {plant.name}
      {` (${plant.protection}) `}

      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => handleDelete(plant.id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default Plant;

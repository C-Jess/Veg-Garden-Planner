import React from "react";
import "./Select.css";
import Button from "react-bootstrap/Button";
import Plant from "./componets/Plants";
import PlantModal from "./componets/PlantModal";

function Select({ plantList, setPlantList }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
    setSelection(null);
  };
  const handleShow = () => setShow(true);

  const [selection, setSelection] = React.useState(null);

  const handleSelect = (selectedOption) => {
    setSelection(selectedOption);
  };

  const handleAdd = () => {
    handleClose();
    setPlantList([...plantList, selection.label]);
  };

  return (
    <div className="Plan">
      <Button size="lg" onClick={handleShow}>
        Add Plant
      </Button>

      {plantList.map((plantname) => {
        return (
          <Plant
            plantList={plantList}
            setPlantList={setPlantList}
            plant={plantname}
          />
        );
      })}
      <PlantModal
        show={show}
        data={!data ? null : data}
        selection={selection}
        handleClose={handleClose}
        handleSelect={handleSelect}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default Select;

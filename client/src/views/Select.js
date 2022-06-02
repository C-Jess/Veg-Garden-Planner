import React from "react";
import Button from "react-bootstrap/Button";
import Plant from "../componets/Plant";
import PlantModal from "../componets/PlantModal";

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
    setPlantID(null);
    setPlantName(null);
    setPlantProtection(null);
  };
  const handleShow = () => setShow(true);

  const [plantName, setPlantName] = React.useState(null);
  const [plantID, setPlantID] = React.useState(null);
  const [plantProtection, setPlantProtection] = React.useState(null);

  const handleAdd = () => {
    if (plantName != null && plantProtection != null) {
      handleClose();

      let plantOffset = null;
      switch (plantProtection) {
        case "Inside":
          plantOffset = data[plantID].inside_sow_offset;
          break;
        case "Outside: Protected":
          plantOffset = data[plantID].protected_sow_offset;
          break;
        case "Outside: Unprotected":
          plantOffset = data[plantID].unprotected_sow_offset;
          break;
        default:
          break;
      }
      setPlantList((plantList) => [
        ...plantList,
        {
          id: plantList.length,
          name: plantName,
          protection: plantProtection,
          offset: plantOffset,
        },
      ]);
    }
  };

  function handleDelete(id) {
    setPlantList(plantList.filter((element, index) => index !== id));
  }

  return (
    <div className="Plan">
      <Button size="lg" onClick={handleShow}>
        Add Plant
      </Button>

      {plantList.map((plant, index) => {
        return <Plant key={index} plant={plant} handleDelete={handleDelete} />;
      })}

      <PlantModal
        show={show}
        data={!data ? null : data}
        plantName={plantName}
        setPlantName={setPlantName}
        plantProtection={plantProtection}
        setPlantProtection={setPlantProtection}
        setPlantID={setPlantID}
        plantID={plantID}
        handleClose={handleClose}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default Select;

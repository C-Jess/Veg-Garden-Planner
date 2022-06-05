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
  const handleShow = () => setShow(true);

  function handleDelete(id) {
    setPlantList(plantList.filter((element) => element.id !== id));
  }

  return (
    <div className="Select">
      <Button size="lg" onClick={handleShow}>
        Add Plant
      </Button>

      {plantList.map((plant, index) => {
        return <Plant key={index} plant={plant} handleDelete={handleDelete} />;
      })}

      <PlantModal
        show={show}
        data={!data ? null : data}
        setShow={setShow}
        setPlantList={setPlantList}
      />
    </div>
  );
}

export default Select;

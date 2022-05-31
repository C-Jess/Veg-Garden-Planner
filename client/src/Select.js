import React from "react";
import "./Select.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Selecter from "react-select";
import Plant from "./componets/Plants";

function Select({ plantList, setPlantList }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
    setSelection(null);
  };
  const handleShow = () => setShow(true);

  const [data, setData] = React.useState(null);
  const [selection, setSelection] = React.useState(null);

  React.useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Vegetable</Form.Label>
            <Selecter
              options={
                !data
                  ? null
                  : data.map((d) => ({
                      value: d.plant_id,
                      label: d.plant_name,
                    }))
              }
              onChange={handleSelect}
            ></Selecter>
            <Form.Label>
              How your {!selection ? "plant" : selection.label} be sown?
            </Form.Label>
            <Form.Select>
              {!selection
                ? null
                : console.log(data[selection.value - 1].start_protected)}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Select;

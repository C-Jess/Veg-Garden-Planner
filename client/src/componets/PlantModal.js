import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Selecter from "react-select";

function PlantModal({
  show,
  data,
  plantName,
  setPlantName,
  plantProtection,
  setPlantProtection,
  plantID,
  setPlantID,
  handleClose,
  handleAdd,
}) {
  const handleSelect = (selectedOption) => {
    setPlantName(selectedOption.label);
    setPlantID(selectedOption.value - 1);
  };
  const handleProtection = (option) => {
    if (option.target.value !== "select...") {
      setPlantProtection(option.target.value);
    } else {
      setPlantProtection(null);
    }
  };

  return (
    <div className="plantModal">
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
            <Form.Label defaultValue={plantName}>Vegetable</Form.Label>
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
            <Form.Label defaultValue={plantProtection}>
              How will your {!plantName ? "plant" : plantName} be sown?
            </Form.Label>
            <Form.Select onChange={handleProtection}>
              <option>select...</option>
              {plantID == null ? null : !data[plantID].direct_sow ? (
                <option>Inside</option>
              ) : null}
              {plantID == null ? null : !data[plantID].start_protected ? (
                <option>Outside: Protected</option>
              ) : null}
              {plantID == null ? null : !data[plantID].start_protected ? (
                <option>Outside: Unprotected</option>
              ) : null}
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

export default PlantModal;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Selecter from "react-select";

function PlantModal({ show, data, plant, handleClose, handleAdd }) {
  const handleSelect = (selectedOption) => {
    //setPlantName(selectedOption.label);
    //setPlantID(selectedOption.value - 1);
  };
  const handleProtection = (option) => {
    if (option.target.value !== "select...") {
      //setPlantProtection(option.target.value);
    } else {
      //setPlantProtection(null);
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
            <Form.Label htmlFor="vegSelector">Vegetable</Form.Label>
            <Selecter
              classNamePrefix="react_select"
              options={
                !data
                  ? null
                  : data.map((d) => ({
                      value: d.plant_id,
                      label: d.plant_name,
                    }))
              }
              onChange={handleSelect}
            />
            <Form.Label htmlFor="protectionSelector">
              Sowing Location
            </Form.Label>
            <Form.Select
              id="protectionSelector"
              onChange={handleProtection}
            ></Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
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

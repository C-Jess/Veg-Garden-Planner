import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Selecter from "react-select";

function PlantModal({
  show,
  selection,
  handleClose,
  handleSelect,
  handleAdd,
  data,
}) {
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

export default PlantModal;

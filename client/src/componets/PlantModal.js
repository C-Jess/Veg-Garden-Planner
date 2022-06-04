import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Selecter from "react-select";

function PlantModal({ show, setShow, data, setPlantList }) {
  const [inputs, setInputs] = React.useState({});

  const handleSelecterChange = (option) => {
    const label = option.label;
    const value = option.value;
    setInputs((values) => ({ ...values, name: label }));
    setInputs((values) => ({ ...values, id: value }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAdd = () => {
    if (inputs.name && inputs.sowingLocation) {
      handleClose();

      let plantOffset = null;
      switch (inputs.sowingLocation) {
        case "Inside":
          plantOffset = data[inputs.id].inside_sow_offset;
          break;
        case "Outside: Protected":
          plantOffset = data[inputs.id].protected_sow_offset;
          break;
        case "Outside: Unprotected":
          plantOffset = data[inputs.id].unprotected_sow_offset;
          break;
        default:
          break;
      }
      setPlantList((plantList) => [
        ...plantList,
        {
          id: plantList.length,
          name: inputs.name,
          protection: inputs.sowingLocation,
          offset: plantOffset,
        },
      ]);
    }
  };

  const handleClose = () => {
    setShow(false);
    setInputs({});
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
              name="vegetable"
              classNamePrefix="react_select"
              options={
                !data
                  ? null
                  : data.map((d) => ({
                      value: d.plant_id,
                      label: d.plant_name,
                    }))
              }
              onChange={handleSelecterChange}
            />
            <Form.Label htmlFor="protectionSelector">
              Sowing Location
            </Form.Label>
            <Form.Select
              name="sowingLocation"
              id="protectionSelector"
              onChange={handleChange}
            >
              <option>select...</option>
              {inputs.id == null ? null : !data[inputs.id].direct_sow ? (
                <option>Inside</option>
              ) : null}
              {inputs.id == null ? null : !data[inputs.id].start_protected ? (
                <option>Outside: Protected</option>
              ) : null}
              {inputs.id == null ? null : !data[inputs.id].start_protected ? (
                <option>Outside: Unprotected</option>
              ) : null}
            </Form.Select>
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

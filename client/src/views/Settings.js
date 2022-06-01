import React from "react";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

function Settings({ frostDates, setFrostDates }) {
  const [inputs, setInputs] = React.useState(() => {
    if (frostDates.firstFrost != null) {
      const firstDay = moment(frostDates.firstFrost).get("date");
      const firstMonth = moment(frostDates.firstFrost).get("month") + 1;
      const lastDay = moment(frostDates.lastFrost).get("date");
      const lastMonth = moment(frostDates.lastFrost).get("month") + 1;
      return {
        firstFrostDay: firstDay,
        firstFrostMonth: firstMonth,
        lastFrostDay: lastDay,
        lastFrostMonth: lastMonth,
      };
    } else {
      return {};
    }
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    if (
      inputs.firstFrostDay &&
      inputs.firstFrostMonth &&
      inputs.lastFrostDay &&
      inputs.lastFrostMonth
    ) {
      const firstFrost = moment().set({
        month: inputs.firstFrostMonth - 1,
        date: inputs.firstFrostDay,
      });
      const lastFrost = moment().set({
        month: inputs.lastFrostMonth - 1,
        date: inputs.lastFrostDay,
      });
      setFrostDates({
        firstFrost: firstFrost,
        lastFrost: lastFrost,
      });
      alert("frostdates set");
    }
  };

  return (
    <div className="settings">
      <Form onSubmit={handleSubmit}>
        <Form.Label>{"Last Frost (in spring)"}</Form.Label>
        <Row>
          <Col>
            <FloatingLabel label="Day">
              <Form.Control
                type="number"
                name="lastFrostDay"
                value={inputs.lastFrostDay || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Month">
              <Form.Control
                type="number"
                name="lastFrostMonth"
                value={inputs.lastFrostMonth || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Form.Label>{"Last Frost (in autumn/winter)"}</Form.Label>
        <Row>
          <Col>
            <FloatingLabel label="Day">
              <Form.Control
                type="number"
                name="firstFrostDay"
                value={inputs.firstFrostDay || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Month">
              <Form.Control
                type="number"
                name="firstFrostMonth"
                value={inputs.firstFrostMonth || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default Settings;

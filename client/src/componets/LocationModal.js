import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import moment from "moment";

function LocationModal({ show, setShow, setFrostDates }) {
  const [location, setLocation] = React.useState(null);
  const [locationStatus, setLocationStatus] = React.useState(null);
  const [calulationStatus, setCalculationStatus] = React.useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus(null);
      setLocationStatus("Not supported");
    } else {
      setLocationStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
          setLocationStatus("Found");
        },
        () => {
          setLocationStatus("Unable to get your location");
        }
      );
    }
  };

  const handleFrostDates = () => {
    setFrostDates(calculateFrostDates(getWeatherData()));
    setShow(false);
  };

  function getWeatherData() {
    setCalculationStatus("Fetching Data...");
    fetch("/token")
      .then((res) => res.json())
      .then((data) =>
        fetch(
          `https://history.openweathermap.org/data/2.5/aggregated/year?units=metric&lat=${location.latitude}&lon=${location.longitude}&appid=${data}`
        )
          .then((res) => res.json())
          .then((data) => {
            setCalculationStatus("Calculating...");
            return data;
          })
      );
  }

  function calculateFrostDates(weatherData) {
    var lastFrost = null;
    var firstFrost = null;
    for (const index in weatherData) {
      const day = weatherData[index];
      const date = moment().set({ date: day.day, month: day.month - 1 });
      const frost = day.temp.average_min - 273.15 < 3;
      //console.log(moment(date).format("DD/MM"), frost);
      if (day.month <= 6 && frost) {
        lastFrost = date;
      }
      if (day.month >= 6 && frost) {
        firstFrost = date;
        break;
      }
    }
    return { firstFrost: firstFrost, lastFrost: lastFrost };
  }

  return (
    <div className="plantModal">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Generate Your Frost Dates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Your Location</Form.Label>
            <Form.Control type="text" />
            <Button
              onClick={handleGetLocation}
              disabled={locationStatus != null}
            >
              {locationStatus ? locationStatus : "Get Location"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href="/settings">
            Add Manually
          </Button>
          <Button
            variant="primary"
            disabled={location == null || calulationStatus != null}
            onClick={handleFrostDates}
          >
            {calulationStatus ? calulationStatus : "Generate"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationModal;

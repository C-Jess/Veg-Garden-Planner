import React from "react";
import moment from "moment";
import Button from "react-bootstrap/Button";
import LocationModal from "../componets/LocationModal";

function Diary({ frostDates, setFrostDates }) {
  const [show, setShow] = React.useState(frostDates.firstFrost == null);

  const [events, setEvents] = React.useState([]);
  const plantList = JSON.parse(localStorage.getItem("plantList"));

  function calculateSowDates() {
    const eventList = [];
    for (const index in plantList) {
      const plant = plantList[index];
      const week = moment().set(
        "week",
        moment(frostDates.lastFrost).get("week") + plant.offset
      );
      const name = "";
      const event = {
        name: name.concat(plant.name, " (", plant.protection, ")"),
        date: moment(week).format("Do MMM"),
      };
      eventList.push(event);
    }
    return eventList;
  }

  const handleGenerate = () => {
    if (events.length !== plantList.length) {
      setEvents(calculateSowDates());
    }
  };

  return (
    <div className="diary">
      <Button onClick={handleGenerate} disabled={plantList.length === 0}>
        Generate Dates
      </Button>
      <p>{plantList.length === 0 ? "Please add some plants" : null}</p>
      {!events
        ? null
        : events.map((event, index) => {
            return (
              <div key={index}>
                {event.name}: {event.date}
              </div>
            );
          })}

      <LocationModal
        show={show}
        setShow={setShow}
        setFrostDates={setFrostDates}
      />
    </div>
  );
}

export default Diary;

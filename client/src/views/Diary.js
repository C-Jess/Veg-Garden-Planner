import React from "react";
import moment from "moment";
import Button from "react-bootstrap/Button";
import LocationModal from "../componets/LocationModal";

function Diary({ frostDates, setFrostDates }) {
  const [show, setShow] = React.useState(frostDates.firstFrost == null);

  const [events, setEvents] = React.useState([]);
  const plantList = JSON.parse(localStorage.getItem("plantList"));

  const calculateSowDates = () => {
    if (events.length !== plantList.length) {
      for (const index in plantList) {
        const plant = plantList[index];
        console.log(frostDates.lastFrost);
        const week = moment().set(
          "week",
          moment(frostDates.lastFrost).get("week") + plant.offset
        );
        const name = "";
        const event = {
          name: name.concat(plant.name, " (", plant.protection, ")"),
          date: moment(week).format("Do MMM"),
        };
        setEvents((events) => [...events, event]);
      }
    }
  };

  return (
    <div className="diary">
      <Button onClick={calculateSowDates} disabled={plantList.length === 0}>
        Generate Dates
      </Button>
      <p>{plantList.length === 0 ? "Please add some plants" : null}</p>
      {!events
        ? null
        : events.map((event) => {
            return (
              <div>
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

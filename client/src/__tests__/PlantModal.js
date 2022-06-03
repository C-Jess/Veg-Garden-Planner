import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PlantModal from "../componets/PlantModal";

const testData = [
  {
    id: 1,
    name: "Sprouting Broccoli",
    protection: "Outside: Protected",
    offset: -3,
  },
  { id: 5, name: "Leeks", protection: "Outside: Unprotected", offset: -4 },
  { id: 14, name: "Peppers", protection: "Inside", offset: -7 },

  {
    id: 4,
    name: "Maincrop Carrots",
    protection: "Outside: Protected",
    offset: 0,
  },
];

const data = [
  {
    plant_id: 1,
    plant_name: "Sprouting Broccoli",
  },
];

it("renders without crashing", () => {
  render(<PlantModal />);
});

describe("vegetable select tests", () => {
  it("renders a searchable drop down", async () => {
    render(<PlantModal data={data} show={true} plant={testData[0]} />);
    expect(document.querySelector(".react_select__input")).toBeInTheDocument();
  });
});

describe("protection select tests", () => {
  it("renders a drop down", () => {
    render(<PlantModal data={data} show={true} plant={testData[0]} />);
    expect(screen.getByLabelText("Sowing Location")).toBeInTheDocument();
  });
});

it("renders close button", () => {
  render(<PlantModal data={data} show={true} plant={testData[0]} />);
  expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
});

it("renders add button", () => {
  render(<PlantModal data={data} show={true} plant={testData[0]} />);
  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
});

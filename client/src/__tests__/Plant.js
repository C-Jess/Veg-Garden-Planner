import React from "react";
import { render, screen } from "@testing-library/react";
import Plant from "../componets/Plant";

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

describe("renders without crashing", () => {
  var nameTestData = [];
  testData.forEach((element) => {
    nameTestData.push([element.name, element]);
  });
  test.each(nameTestData)("%s plant renders", (name, plant) => {
    render(<Plant plant={plant} />);
    expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
  });
});

describe("delete button is rendered", () => {
  var deleteButtonTestData = [];
  testData.forEach((element) => {
    deleteButtonTestData.push([element.name, element]);
  });
  test.each(deleteButtonTestData)("%s button renders", (name, plant) => {
    render(<Plant plant={plant} />);
    expect(screen.getAllByRole("button")[0].textContent).toBe("Delete");
  });
});

describe("edit button is rendered", () => {
  var deleteButtonTestData = [];
  testData.forEach((element) => {
    deleteButtonTestData.push([element.name, element]);
  });
  test.each(deleteButtonTestData)("%s button renders", (name, plant) => {
    render(<Plant plant={plant} />);
    expect(screen.getAllByRole("button")[1].textContent).toBe("Edit");
  });
});

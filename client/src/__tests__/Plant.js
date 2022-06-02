import React from "react";
import { render, screen } from "@testing-library/react";
import Plant from "../componets/Plant";

const plants = [
  { id: 1, name: "Sprouting Broccoli", protection: "Inside", offset: -3 },
  { id: 5, name: "Leeks", protection: "Outside: Unprotected", offset: -4 },
  { id: 14, name: "Peppers", protection: "Inside", offset: -7 },

  {
    id: 4,
    name: "Maincrop Carrots",
    protection: "Outside: Protected",
    offset: 0,
  },
];

it("renders without crashing", () => {
  render(<Plant plant={plants[0]} />);
});

describe("passing list", () => {
  var nameTestData = [];
  plants.forEach((element) => {
    nameTestData.push([element.name, element]);
  });
  test.each(nameTestData)("%s plant renders", (name, plant) => {
    render(<Plant plant={plant} />);
    expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
  });
});

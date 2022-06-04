import { render, screen } from "@testing-library/react";
import React from "react";
import LocationModal from "../componets/LocationModal";

it("renders without crashing", () => {
  render(<LocationModal show={true} />);
});

it("renders get location button", () => {
  render(<LocationModal show={true} />);
  expect(
    screen.getByRole("button", { name: "Get Location" })
  ).toBeInTheDocument();
});

it("renders add manually button", () => {
  render(<LocationModal show={true} />);
  expect(
    screen.getByRole("button", { name: "Add Manually" })
  ).toBeInTheDocument();
});
test("set manually button links to settings", () => {
  render(<LocationModal show={true} />);
  expect(screen.getByRole("button", { name: "Add Manually" })).toHaveAttribute(
    "href",
    "/settings"
  );
});

it("renders generate dates button", () => {
  render(<LocationModal show={true} />);
  expect(screen.getByRole("button", { name: "Generate" })).toBeInTheDocument();
});

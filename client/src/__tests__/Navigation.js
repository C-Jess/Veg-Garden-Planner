import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "../componets/Navigation";

it("renders without crashing", () => {
  render(<Navigation />);
});

it("renders website name", () => {
  render(<Navigation />);
  expect(screen.getByText("Veg Garden Planner")).toBeInTheDocument();
});

describe("renders page navigations", () => {
  test.each([["Select"], ["Plan"], ["Diary"], ["Settings"]])(
    "%s nav is rendered",
    (input) => {
      render(<Navigation />);
      expect(screen.getByText(input)).toBeInTheDocument();
    }
  );
});

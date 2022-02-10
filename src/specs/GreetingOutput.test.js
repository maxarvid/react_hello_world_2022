import React from "react";
import GreetingOutput from "../GreetingOutput";
import { screen, render } from "@testing-library/react";

describe("GreetingOutput.jsx", () => {
  beforeEach(() => {
    render(<GreetingOutput planet="TestPlanet" />);
  });

  it("is expected to display a greeting that contains planet name", () => {
    expect(
      screen.getByText("Hello TestPlanet from Functional Component", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("is expected to be accessible by id", () => {
    expect(screen.getByTestId("greeting")).toHaveTextContent(
      "Hello TestPlanet from Functional Component",
      { exact: false }
    );
  });
});

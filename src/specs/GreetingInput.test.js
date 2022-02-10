import React from "react";
import GreetingInput from "../GreetingInput";
import { screen, render } from "@testing-library/react";

describe("GreetingInput.jsx", () => {
  beforeEach(() => {
    render(<GreetingInput />);
  });

  it("is expected to contain input field", () => {
    expect(
      screen.getByPlaceholderText("Enter planet name")
    ).toBeInTheDocument();
  });

  it("is expected to be accessible by id", () => {
    expect(screen.getByTestId("input").placeholder).toEqual(
      "Enter planet name"
    );
  });
});

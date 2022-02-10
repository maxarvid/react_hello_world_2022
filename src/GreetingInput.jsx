import React from "react";

const GreetingInput = (props) => {
  return (
    <input
      data-testid="input"
      type="text"
      placeholder="Enter planet name"
      onChange={(event) => props.renderInput(event.target.value)}
    />
  );
};

export default GreetingInput;

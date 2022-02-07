import React from "react";

const GreetingInput = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter planet name"
        onChange={(event) => props.renderInput(event)}
      />
    </div>
  );
};

export default GreetingInput;

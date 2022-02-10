import React from "react";

const GreetingOutput = (props) => {
  return (
    <h1 data-testid="greeting">
      Hello {props.planet} from Functional Component
    </h1>
  );
};

export default GreetingOutput;

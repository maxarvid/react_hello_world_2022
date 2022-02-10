import React, { useState, useEffect } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

const App = () => {
  const [planet, setPlanet] = useState();

  useEffect(() => {
    setPlanet("Venus");
  }, []);

  return (
    <>
      <GreetingOutput planet={planet} />
      <GreetingInput renderInput={setPlanet} />
    </>
  );
};

export default App;

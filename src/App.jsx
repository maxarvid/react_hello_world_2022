import React, { useState, useEffect } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

const App = () => {
  const [planet, setPlanet] = useState();

  useEffect(() => {
    setPlanet('Venus')
  }, [])
  
  return (
    <div>
      <GreetingOutput planet={planet} />
      <GreetingInput renderInput={setPlanet} />
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import GreetingInput from "./GreetingInput";
// import GreetingOutput from "./GreetingOutput";

// export class App extends Component {
//   state = {
//     planet: "Venus",
//     whatever: "LV-426",
//   };

//   renderInput(event) {
//     this.setState({ planet: event.target.value });
//   }

//   render() {
//     const { planet } = this.state;
//     return (
//       <div>
//         <GreetingOutput planet={planet} />
//         <GreetingInput renderInput={this.renderInput.bind(this)} />
//       </div>
//     );
//   }
// }

// export default App;

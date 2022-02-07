import React, { Component } from "react";

export class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     planet: 'Venus'
  //   }
  // }

  state = {
    planet: "Venus",
    whatever: "LV-426"
  };

  render() {
    // const planet = "Venus";
    const { planet } = this.state;
    return (
      <div>
        <h1>Hello {planet} from class component</h1>
      </div>
    );
  }
}

export default App;

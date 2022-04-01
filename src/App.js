import React, { Component } from "react";
import General from "./components/General";
import Practical from "./components/Practical";
import Education from "./components/Education";
import "./styles/styles.css"; 
class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <form>
          <General />
          <Education />
          <Practical />
        </form>
      </div>
    )
  }
}

export default App;

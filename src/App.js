import React from "react";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import cyan from "@material-ui/core/colors/cyan";
import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";

import "./App.css";
import Colors from "./colors.js";
class App extends React.Component {
  state = {
    colors: [
      purple[500],
      purple[200],
      purple[900],
      red[500],
      red[400],
      red[900],
      pink[500],
      pink[200],
      pink[900],
      blue[500],
      blue[200],
      blue[900],
      deepPurple[500],
      cyan[500],
      cyan[200],
      green[500],
      green[300],
      brown[500],
      brown[600],
      brown[200],
    ],
  };
  render() {
    return (
      <div className="App">
        <Colors colorNames={this.state.colors} />
      </div>
    );
  }
}

export default App;

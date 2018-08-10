// create your App component here
import React, { Component } from "react";
import Greeting from "./components/Greeting.js";
import Button from "./components/Button.js";
import ExampleComponent from "./components/ExampleComponent.js";

export default class App extends Component {
  state = {};

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => this.setState({ peopleInSpace: data }));
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        <Button />
      </div>
    );
  }
}
// http://api.open-notify.org/astros.json

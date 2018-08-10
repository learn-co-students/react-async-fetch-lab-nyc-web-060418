// create your App component here
import React, { Component } from 'react';
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  render(){
    return (
      <div>
        < Greeting />
        < ExampleComponent />
        < Button />
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res=>res.json())
      .then(res=>this.setState({
        peopleInSpace: res
      }))
  }
}

// create your App component here
import React, {Component} from 'react'
export default class App extends Component {
  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(res => this.setState(res))
  }

  state = {}

  render() {
      return (
          <div>
              {this.state.message}
              {this.state.number}
          </div>
      );
  }


}

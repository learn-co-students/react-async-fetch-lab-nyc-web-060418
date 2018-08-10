import React, { Component } from 'react'

const apiURL = 'http://api.open-notify.org/astros.json'

class App extends Component {

  state = {
      people: []
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(({data}) => this.setState({ people: data.people.name }))

  }

}

export default App;

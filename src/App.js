import React from 'react'

export default class App extends React.Component{
  state = {
    peopleInSpace : []
  }
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(r=> r.json())
    .then(people => this.setState({
      peopleInSpace: people.people
    }))
  }

  mapPeople = () => {
    return this.state.peopleInSpace.map((people, id) => <h1 key={id}>{people.name} : {people.craft}</h1>)
  }

  render(){
    console.log(this.state.peopleInSpace)
    return(
      <div>{this.mapPeople()}</div>
    )
  }
}
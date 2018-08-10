// create your App component here

import React, { Component } from 'react';


 export default class App extends Component {

   state = {
     spacePeople: []
   }

   render () {
     return (
       <div>
               {this.state.spacePeople.map((person, id) => <h1 key={id}>{person.name}</h1>)}
       </div>
     )
   }

   componentDidMount() {
     fetch("http://api.open-notify.org/astros.json")
     .then(data => data.json())
     .then(people => {
       console.log(people.people)
       this.setState({
         spacePeople: people.people
       })
     })
   }

}

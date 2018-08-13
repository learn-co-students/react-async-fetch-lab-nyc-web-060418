import React from 'react'

class App extends React.Component{

  state={
    data: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json').then(res=>res.json()).then(json=>this.setState({data: json.people}))
  }

  render(){
    console.log(this.state.data);
    return (
      <div>
        hi
      </div>
    )
  }
}

export default App

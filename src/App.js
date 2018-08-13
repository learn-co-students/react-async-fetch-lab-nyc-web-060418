import React, { Component } from 'react'

export default class App extends Component{

componentDidMount(){
  return fetch('http://api.open-notify.org/astros.json')
  .then(resp => resp.json())
}
  render(){
    return <div></div>
  }

}

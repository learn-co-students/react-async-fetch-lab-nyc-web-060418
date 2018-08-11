// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {}
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(res => this.setState(res))
    }
    
    
    
    render() {
        return (
            <div>
                {this.state.message}
                {this.state.number}
                {/* {this.state.people} */}
            </div>
        );
    }
}

export default App;

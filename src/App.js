// create your App component here
import React from 'react';



class App extends React.Component {
    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => data.people)
    }

    render() {
        return (
            <div>
            </div>
        )
    }

    
}

export default App;
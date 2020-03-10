// SEASON project practice
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errMsg: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState(
                {lat: position.coords.latitude}),
            err => {
                this.setState({
                        errMsg: err.message
                    }
                )
            });

    }

    render() {

        if (this.state.errMsg && !this.state.lat) {
            return <h3> Error: {this.state.errMsg}</h3>
        } else if (!this.state.errMsg && this.state.lat) {
            return <h1> Latitude: {this.state.lat} </h1>
        } else {
            return <h1> Loading! </h1>
        }

    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
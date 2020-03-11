// SEASON project practice
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = {lat: null, errMsg: ''};


    componentDidMount() {
        //calls at the time of mounting, only once
        //all the data-loading code should be here
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message}))

        console.log('My component rendered to the screen!')
    }

    componentDidUpdate() {
        //calls at the time of updating, anytime there is an update of the component
        //possible to add data-loading code that is repeated (multiple calls to the network, for instance)
        console.log('My component was just updated -- it rerendered!')
    }

    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return <div className="ui container"><h3> Error: {this.state.errMsg}</h3></div>
        } else if (!this.state.errMsg && this.state.lat) {
            return <div className="ui container"><SeasonDisplay lat={this.state.lat}/></div>
        } else {
            return <div className="ui container"><h1><Spinner message='Please accept the location request'/></h1></div>
        }

    }

    render() {
        return (
            <div>
                <p> this is always here :)</p>
            {this.renderContent()}
        </div>
        )

    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
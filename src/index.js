// SEASON project practice
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errMsg: ''};
    }

componentDidMount(){
   //calls at the time of mounting, only once
    //all the data-loading code should be here
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}), err => this.setState({errMsg: err.message});
    console.log('My component rendered to the screen!')
}
    componentDidUpdate(){
   //calls at the time of updating, anytime there is an update of the component
        //possible to add data-loading code that is repeated (multiple calls to the network, for instance)
        console.log('My component was just updated -- it rerendered!')
}

// componentDidUnmount(){
//         //to remove the component from the screen (cleanup)
// }

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
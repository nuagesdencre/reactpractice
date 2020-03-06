import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// function getButtonText() {
//     return 'Click on Me!';
// }
const Blue = ()=> {
    const buttonText = "Please Click Here!";
    return (<div>

         <label className="label" for="name"> Enter name: </label>
        <input id="name" type="text" />
        {/*<button style={{backgroundColor:'blue', color:'white'}}>{getButtonText()}</button>*/}
        <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
    </div>)
}
ReactDOM.render(
    // <App />,
   <Blue />,
  document.getElementById('root')
);

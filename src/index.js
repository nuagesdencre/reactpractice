import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// function getButtonText() {
//     return 'Click on Me!';
// }

// Objects are not valid as a React child
const Blue = ()=> {
    // const buttonText = "Please Click Here!";
    // Not allowed to print out unless refering to key
    const buttonText = {text: "Click Me"};
    const style = {backgroundColor:'blue', color:'white'};
    return (<div>

         <label className="label" for="name"> Enter name: </label>
        <input id="name" type="text" />
        {/*<button style={{backgroundColor:'blue', color:'white'}}>{getButtonText()}</button>*/}
        <button style={style}>{buttonText.text}</button>
    </div>)
}
ReactDOM.render(
    // <App />,
   <Blue />,
  document.getElementById('root')
);

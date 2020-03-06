import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const Blue = ()=> {
    return (<div>
        <button style={{backgroundColor:'blue', color:'white'}}>Test Blue Button</button>
    </div>)
}
ReactDOM.render(
    <App />,
   // <Blue />,
  document.getElementById('root')
);

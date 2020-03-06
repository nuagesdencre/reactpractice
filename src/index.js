import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                </a>
                <div className="metadata">
                    <span className="date">Today at 11.00AM</span>
                </div>
                <div className="text">Good story bro.</div>
            </div>
        </div>
        </div>
    )
};


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

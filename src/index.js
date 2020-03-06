import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> <CommentDetail author="Sam" timePosted="Today" photo ={faker.image.avatar()} content = "This is fun."/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Ophelie" timePosted="Today" photo ={faker.image.avatar()} content = "Cannot believe it!"/></ApprovalCard>
                <ApprovalCard><CommentDetail author="John" timePosted="Yesterday" photo ={faker.image.avatar()} content = "No way."/></ApprovalCard>
        </div>
    )
};


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

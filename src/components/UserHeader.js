import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
        //userId is a props passed from PostList
    }

    render() {
        const {user} = this.props;
        if (!user) {
            return null;
        }
        return (<div className="header">{user.name}</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
    //logic into mapStateToProps

    //returns the only user we're interested in
};
export default connect(mapStateToProps, {fetchUser})(UserHeader);
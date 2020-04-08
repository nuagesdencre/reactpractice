import React from 'react';
import {connect} from 'react-redux';

import UserHeader from "./UserHeader";
import { fetchPostsAndUser} from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUser();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="header">{post.title} </div>
                        <div className="description">
                            {post.body}
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>

            );
        })
    }

    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {posts: state.posts}
};
export default connect(mapStateToProps, {fetchPostsAndUser})(PostList);
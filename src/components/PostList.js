import React from "react";
import axios from "axios";

class PostList extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        // "http://localhost:5000/posts/" will be replaced with deployed server
        const res = await axios.get("http://localhost:3000/posts/");
        this.setState({ posts: res.data });
    }

    renderDate(dateString) {

    }

    renderList() {
        return this.state.posts.map(post => {
            return ( 
            <div key={post._id}>
                <h3>{post.title}</h3>
            <span>{this.renderDate(post.createdAt)}</span>
            </div>
        );
        });
    }

    render() {
        return <div>{this.renderList}</div>;
    }
}

export default PostList;
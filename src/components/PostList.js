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
        const res = await axios.get("http://localhost:5000/posts/");
        this.setState({ posts: res.data });
    }

    renderDate(dateString) {
        // Array provides names for month values
        const monthNames = ["January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October", "November", "December" ]

        const date = new Date(dateString);

        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderTags(tags) {
        return tags.map(tag => {
        return <span key={tag}>{tag}</span>
        });
    }

    renderList() {
        return this.state.posts.map(post => {
            return ( 
            // Key required for each piece of data
            <div key ={post._id}>
                <h3>{post.title}</h3>
            <span>{this.renderDate(post.createdAt)}</span>
            <div>{this.renderTags(post.tags)}</div>
            </div>
        );
    });
}

    render() {
        return <div>{this.renderList()}</div>;
    }
}

export default PostList;

// import React from "react";
// import axios from "axios";

// class PostList extends React.Component {
//     componentDidMount() {
//         this.getPosts();
//     }

//     async getPosts() {
//         const res = await axios.get("http://localhost:5000/posts");
//         console.log(res);
//     }

//     render() {
//         return <p>post list</p>;
//     }
// }
//     export default PostList;

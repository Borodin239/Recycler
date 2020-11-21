import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import './index.css';
import axios from "axios";


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: props.content,
        }
    }

    render() {
        return (
            <div className="post">
                <ReactMarkdown>{this.props.content}</ReactMarkdown>
            </div>
        )
    }
}

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFetching: false,
            posts: [],
        };
    }
    fetchPosts = () => {
        this.setState({...this.state, isFetching: true});
        axios.get("http://localhost:8000/posts")
            .then(response => this.setState({posts: response.data,
                isFetching: false}))
            .catch(e => console.log(e));
    }

    componentDidMount(){
        this.fetchPosts();
    }


    render(){
        return (
            <div className="feed">
                <p>{this.state.isFetching ? "Loading" : ""}</p>
                {this.state.posts.map(post => (<Post content={post.content} key={post.id}/>))}
            </div>
        )
    }
}


ReactDOM.render(
    <Feed/>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import './index.css';
import axios from "axios";
import GoogleMapReact from 'google-map-react';

function NavBtn(props) {
    return (<button
        className={"navBtn " + (props.active ? "navBtnSelected" : "navBtnNotSelected")}
        onClick={props.onClick}>
        {props.value}</button>);
}

class NavBar extends React.Component {
    renderBtn(i, text_) {
        return (
            <NavBtn value={text_} active={this.props.selected === i} onClick={() => this.props.onClick(i)} />
        )
    }

    render() {
        return (
            <div id="navBar">
                <h1>Resycle</h1>
                {this.renderBtn(0, "News")}
                {this.renderBtn(1, "Map")}
                {this.renderBtn(2, "Info")}
            </div>
        )
    }

}


class Post extends React.Component {
    constructor(props) {
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
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            posts: [],
        };
    }
    fetchPosts = () => {
        this.setState({ ...this.state, isFetching: true });
        axios.get("http://localhost:8000/posts")
            .then(response => this.setState({
                posts: response.data,
                isFetching: false
            }))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.fetchPosts();
    }


    render() {
        return (
            <div className="feed">
                <p>{this.state.isFetching ? "Loading" : ""}</p>
                {this.state.posts.map(post => (<Post content={post.content} key={post.id} />))}
            </div>
        )
    }
}

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            marks: [],
        };
    }

    fethcMarks = () => {

        axios.get("http://localhost:8000/mapmarks")
            .then(response => this.setState({
                marks: response.data,
            }))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.fethcMarks();
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.state.marks.map(mark => (<Marker
                                                        lat={mark.x}
                                                        lng={mark.y}
                                                    />))}
                </GoogleMapReact>
            </div>
        );
    }
}



class Marker extends React.Component {
    static defaultProps = {
        style: {
            position: 'absolute',
            width: 10,
            height: 10,
            left: -10 / 2,
            top: -10 / 2,

            border: '2px solid #ffffff',
            borderRadius: 40,
            backgroundColor: 'green',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 1
        }
    }
    render() {
        return (
            <div style={this.props.style}></div>
        );
    }
}

class Info extends React.Component {
    render() {
        return (<p>Info</p>)
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    handleClick(i) {
        if (i !== this.state.selected) {
            this.setState({ selected: i })
        }
    }

    render() {
        let content;
        switch (this.state.selected) {
            case 0:
                content = <Feed />;
                break;
            case 1:
                content = <Map />;
                break;
            case 2:
                content = <Info />;
        }
        return (
            <div className="page">
                <NavBar selected={this.state.selected} onClick={(i) => this.handleClick(i)} />
                {content}
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
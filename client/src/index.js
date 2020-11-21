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
                <h2>Resycle</h2>
                <div id="navBtns">
                {this.renderBtn(0, "News")}
                {this.renderBtn(1, "Map")}
                {this.renderBtn(2, "Info")}
                </div>
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
            <div id="content">
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
            width: 15,
            height: 15,
            left: -15 / 2,
            top: -15 / 2,

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

function InfoBlock (props) {
    return (
        <div className="infoBlock">
            <img src={props.image} alt={props.title}/>
            <div className="infoText">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: false,
            text: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    fetchInfo = () => {
        this.setState({...this.state, isFetching: true});
        axios.get("http://localhost:8000/info")
            .then(response => this.setState({data: response.data,
                isFetching: false}))
            .catch(e => console.log(e));
    }

    dynamicSearch = () => {
        return this.state.data.filter(
            block => (block.title.toLowerCase() + block.text.toLowerCase()).includes(this.state.text.toLowerCase()));
    }

    componentDidMount() {
        this.fetchInfo();
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div id="content">
                <p>Тут вы можете найти информацию по интересующей вас экологической организации, по значку,
                    обозначающему тип переработки, или же информацию о утилизации и переработки любых материалов.</p>
                <input type="text" placeholder="Search" value={this.state.text} onChange={this.handleChange}/>
                {this.dynamicSearch().map(
                    block =>
                    (<InfoBlock key={block.key} image={block.image} title={block.title} text={block.text}/>))}
            </div>)
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    handleClick(i){
        if (i !== this.state.selected) {
            this.setState({selected: i})
        }
    }

    render() {
        let content;
        switch (this.state.selected) {
            case 0:
                content = <Feed/>;
                break;
            case 1:
                content = <Map/>;
                break;
            case 2:
                content = <Info/>;
        }
        return (
            <div id="page">
                <NavBar selected={this.state.selected} onClick={(i) => this.handleClick(i)}/>
                {content}
            </div>
        )
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import axios from "axios";

function NavBtn(props) {
    return (
        <a onClick={props.onClick} aria-current="page"
           className={"div-block w-inline-block " + (props.active ? "selected w--current" : "")}>
            <img src={props.img} loading="lazy"
                 width="15" alt="" className="image"/>
            <div className="text-block-2">{props.value}</div>
        </a>
    );
}

class NavBar extends React.Component {
    renderBtn(i, text, img) {
        return (
            <NavBtn value={text} img={img} active={this.props.selected === i} onClick={() => this.props.onClick(i)} />
        )
    }

    render() {
        return (
            <div className="menu w-col w-col-3">
                <div className="div-block-3">
                    <div className="text-block-3">Recycler</div>
                </div>
                <div className="container w-container">
                    {this.renderBtn(0, "Новости и акции", "5fba30d62dc21a2caa1fb28d\\5fba48ff5863162824bd614a_reload.svg")}
                    {this.renderBtn(1, "Карта пунктов приема", "5fba30d62dc21a2caa1fb28d\\5fba4752795486326a69fe44_placeholder.svg")}
                    {this.renderBtn(2, "Экологический справочник", "5fba30d62dc21a2caa1fb28d\\5fba4902558fb671466cbef8_chat.svg")}
                </div>
            </div>
        )
    }

}


function Post(props) {
    //<a href="#" className="button w-button">Получить</a>
    return (
        <div className="post-block">
            <ReactMarkdown>{props.content}</ReactMarkdown>

        </div>
    )
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
            <div className="main-content w-col w-col-9">
                <p>{this.state.isFetching ? "Loading" : ""}</p>
                {this.state.posts.map(post => (<Post content={post.content} key={post.id} />))}
            </div>
        )
    }
}

function InfoBlock (props) {
    return (
        <div className="card-block">
            <img src={props.image} alt={props.title} className="image-2" loading="lazy"/>
            <div>
                <div className="post-heading">{props.title}</div>
                <div className="card-text">{props.text}</div>
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
            <div className="main-content w-col w-col-9">
                <input id="info-input" type="text" placeholder="Search" value={this.state.text} onChange={this.handleChange}/>
                <p id="info-text">Тут вы можете найти информацию по интересующей вас экологической организации, по коду переработки,
                    или же информацию о утилизации и переработки любых материалов.</p>
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
                content = <div id="map" className="main-content w-col w-col-9">
                            <iframe src="https://recyclemap.ru" allowFullScreen/>
                          </div>;
                break;
            case 2:
                content = <Info/>;
        }
        return (
            <div className="columns w-row">
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
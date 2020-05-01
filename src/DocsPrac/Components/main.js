'use strict';

//! Component as a function
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

//! Component as a class
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

//! Rendering a component
const element = <Welcome name="Baya" />;
ReactDOM.render(
    element,
    document.querySelector('#root')
)

//! Component using another component
function App() {
    return (
        <div>
            <Welcome name="Baya" />
            <Welcome name="Sarah" />
            <Welcome name="Russel" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

//! Full example
function formatDate(date) {
    return date.toLocaleDateString();
  }

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl} 
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

//! Condensed - separated components that you can reuse are the way to go
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl} 
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'Enjoying React :)',
    author: {
        name: 'Will',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <Comment
        date = {comment.date}
        text = {comment.text}
        author = {comment.author}
    />,
    document.querySelector('#root')
)

//! All functions/classes should be pure - NOT CHANGE THEIR INPUTS
//! All React components must act like pure functions with respect to their props.
'use strict';

//! Component as a function

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'Hello, ',
        props.name
    );
}

//! Component as a class

var WelcomeClass = function (_React$Component) {
    _inherits(WelcomeClass, _React$Component);

    function WelcomeClass() {
        _classCallCheck(this, WelcomeClass);

        return _possibleConstructorReturn(this, (WelcomeClass.__proto__ || Object.getPrototypeOf(WelcomeClass)).apply(this, arguments));
    }

    _createClass(WelcomeClass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'Hello, ',
                this.props.name
            );
        }
    }]);

    return WelcomeClass;
}(React.Component);

//! Rendering a component


var element = React.createElement(Welcome, { name: 'Baya' });
ReactDOM.render(element, document.querySelector('#root'));

//! Component using another component
function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Welcome, { name: 'Baya' }),
        React.createElement(Welcome, { name: 'Sarah' }),
        React.createElement(Welcome, { name: 'Russel' })
    );
}

ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));

//! Full example
function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return React.createElement(
        'div',
        { className: 'Comment' },
        React.createElement(
            'div',
            { className: 'UserInfo' },
            React.createElement('img', { className: 'Avatar',
                src: props.author.avatarUrl,
                alt: props.author.name
            }),
            React.createElement(
                'div',
                { className: 'UserInfo-name' },
                props.author.name
            )
        ),
        React.createElement(
            'div',
            { className: 'Comment-text' },
            props.text
        ),
        React.createElement(
            'div',
            { className: 'Comment-date' },
            formatDate(props.date)
        )
    );
}

//! Condensed - separated components that you can reuse are the way to go
function Avatar(props) {
    return React.createElement('img', { className: 'Avatar',
        src: props.user.avatarUrl,
        alt: props.user.name
    });
}

function UserInfo(props) {
    return React.createElement(
        'div',
        { className: 'UserInfo' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(
            'div',
            { className: 'UserInfo-name' },
            props.user.name
        )
    );
}

function Comment(props) {
    return React.createElement(
        'div',
        { className: 'Comment' },
        React.createElement(UserInfo, { user: props.author }),
        React.createElement(
            'div',
            { className: 'Comment-text' },
            props.text
        ),
        React.createElement(
            'div',
            { className: 'Comment-date' },
            formatDate(props.date)
        )
    );
}

var comment = {
    date: new Date(),
    text: 'Enjoying React :)',
    author: {
        name: 'Will',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

ReactDOM.render(React.createElement(Comment, {
    date: comment.date,
    text: comment.text,
    author: comment.author
}), document.querySelector('#root'));

//! All functions/classes should be pure - NOT CHANGE THEIR INPUTS
//! All React components must act like pure functions with respect to their props.
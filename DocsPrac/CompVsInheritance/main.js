'use strict';

function FancyBorder(props) {
    return React.createElement(
        'div',
        { className: 'FancyBorder FancyBorder-' + props.color },
        props.children
    );
}

function WelcomeDialog() {
    return React.createElement(Dialog, {
        title: 'Welcome',
        message: 'Thank you for visiting' });
}

function Dialog(props) {
    return React.createElement(
        FancyBorder,
        { color: 'blue' },
        React.createElement(
            'h1',
            { className: 'Dialog-title' },
            props.title
        ),
        React.createElement(
            'p',
            { className: 'Dialog-message' },
            props.message
        )
    );
}

function Contacts() {
    return React.createElement('div', { className: 'Contacts' });
}

function Chat() {
    return React.createElement('div', { className: 'Chat' });
}

function SplitPane(props) {
    return React.createElement(
        'div',
        { className: 'SplitPane' },
        React.createElement(
            'div',
            { className: 'SplitPane-left' },
            props.left
        ),
        React.createElement(
            'div',
            { className: 'SplitPane-right' },
            props.right
        )
    );
}

function App() {
    return React.createElement(SplitPane, {
        left: React.createElement(Contacts, null),
        right: React.createElement(Chat, null) });
}

ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));
'use strict';

//! Basic rendering with jsx

ReactDOM.render(React.createElement(
    'h1',
    null,
    'Hello, World'
), document.querySelector('#root'));

//! Rendering with vars
var name = 'Will Storey';
var element = React.createElement(
    'p',
    null,
    'Hello, ',
    name
);

ReactDOM.render(element, document.querySelector('#jsx'));

//! Rendering with a function
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'John',
    lastName: 'Oliver'
};

var elementTwo = React.createElement(
    'p',
    null,
    'Hello, ',
    formatName(user)
);

ReactDOM.render(elementTwo, document.querySelector('#jsxTwo'));

//! jsx are attributes! We can use ifs and fors
function getGreeting(user) {
    if (user) {
        return React.createElement(
            'p',
            null,
            'Hello, ',
            formatName(user),
            '!!'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'Hello, STRANGER'
        );
    }
}

ReactDOM.render(getGreeting(user), document.querySelector('#jsx3'));

//! Pass data attribute with "" and can close a tag like normal
var dataAttr = React.createElement('div', { tabIndex: '0' });
var imgEx = React.createElement('img', { src: user.profileImageUrl });

//! jsx can have children el's with a class and id
var children = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { 'class': 'greeting' },
        'Hello!'
    ),
    React.createElement(
        'h2',
        { id: 'subtitle' },
        'Good to see you here.'
    )
);

ReactDOM.render(children, document.querySelector('#jsx4'));
'use strict';

//! Basic rendering with jsx
ReactDOM.render(
    <h1>Hello, World</h1>,
    document.querySelector('#root')
);

//! Rendering with vars
const name = 'Will Storey';
const element = <p>Hello, { name }</p>;

ReactDOM.render(
    element,
    document.querySelector('#jsx')
)

//! Rendering with a function
function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'John',
    lastName: 'Oliver'
};

const elementTwo = (
    <p>
        Hello, { formatName(user) }
    </p>
);

ReactDOM.render(
    elementTwo,
    document.querySelector('#jsxTwo')
);

//! jsx are attributes! We can use ifs and fors
function getGreeting(user) {
    if (user) {
    return <p>Hello, { formatName(user) }!!</p>
    } else {
        return <p>Hello, STRANGER</p>
    }
}

ReactDOM.render(
    getGreeting(user),
    document.querySelector('#jsx3')
);

//! Pass data attribute with "" and can close a tag like normal
const dataAttr = <div tabIndex="0"></div>;
const imgEx = <img src={ user.profileImageUrl }/>;

//! jsx can have children el's with a class and id
const children = (
    <div>
        <h1 class="greeting">Hello!</h1>
        <h2 id="subtitle">Good to see you here.</h2>
    </div>
);

ReactDOM.render(
    children,
    document.querySelector('#jsx4')
)


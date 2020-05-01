'use strict';

var el = React.createElement(
    'h1',
    null,
    'Hello, world'
);
ReactDOM.render(el, document.querySelector('#root'));

// React elements are immutable - once created cannot be changed

function tick() {
    var element = React.createElement(
        'div',
        null,
        'Hello, world!',
        React.createElement(
            'h2',
            null,
            'It is ',
            new Date().toLocaleTimeString()
        )
    );
    ReactDOM.render(element, document.querySelector('#root'));
}

setInterval(tick, 1000);
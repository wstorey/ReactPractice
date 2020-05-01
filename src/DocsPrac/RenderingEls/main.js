'use strict';

const el = <h1>Hello, world</h1>;
ReactDOM.render(
    el,
    document.querySelector('#root')
);

// React elements are immutable - once created cannot be changed

function tick() {
    const element = (
        <div>Hello, world!
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.querySelector('#root'));
}

setInterval(tick, 1000);
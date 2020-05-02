'use strict';

//! Preventing default
function ActionLink() {
    function handleActionClick(e) {
        e.preventDefault();
        console.log(`The link was clicked`);
    }

    return (
        <a href="#" onClick={handleActionClick}>
            Click me!
        </a>
    );
}

//! Listening
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Binding to make 'this' work in the callback
        // Class methods are not bound be default
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            //! Use an arrow function in the callback if you dont want to do bind or use experimental class syntax
            //! Better to bind in the constructor tho

            // <button onClick={() => this.handleClick()}>
            //      {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.querySelector('#root')
);

//! Passing data to event handlers
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>;
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>;
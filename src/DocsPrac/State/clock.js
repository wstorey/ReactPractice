'use strict';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
    // Only place to assign this.state
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //! Runs after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    //! Called when a component is being removed from the DOM
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // Do not use = with state, use setState instead
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
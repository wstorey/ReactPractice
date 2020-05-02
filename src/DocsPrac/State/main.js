'use strict';

//! Clock w/out state
function ClockFunction(props) {
    return(
        <div>
            <h1>Hello, World</h1>
            <h2>IT is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

function tickFunction() {
    ReactDOM.render(
        <Clock date = {new Date()} />,
        document.querySelector('#root')
    );
}

// setInterval(tick, 1000);

//! Clock w/ state
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
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.querySelector('#root')
)

//! this.props & this.state run asynchronously
// Running setState this way, as a function, ensures the previous state and props are used correctly
this.setState((state, props) => {
    counter: state.counter + props.increment
});

//! Individual var's should have separate setState calls
class TestClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
    }

    componentDidMount() {
        fetchPosts().then(res => {
            this.setState({
                posts: res.posts
            });
        });

        fetchComments().then(res => {
            this.setState({
                comments: res.comments
            });
        })
    }
}

//! Top-down data flow?? State's are owned by their individual component
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

<FormattedDate date={this.state.date} />

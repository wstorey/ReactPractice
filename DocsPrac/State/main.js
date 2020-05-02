'use strict';

//! Clock w/out state

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ClockFunction(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello, World'
        ),
        React.createElement(
            'h2',
            null,
            'IT is ',
            props.date.toLocaleTimeString()
        )
    );
}

function tickFunction() {
    ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.querySelector('#root'));
}

// setInterval(tick, 1000);

//! Clock w/ state

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    // Only place to assign this.state
    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    //! Runs after the component output has been rendered to the DOM


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }

        //! Called when a component is being removed from the DOM

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }

        // Do not use = with state, use setState instead

    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, null), document.querySelector('#root'));

//! this.props & this.state run asynchronously
// Running setState this way, as a function, ensures the previous state and props are used correctly
this.setState(function (state, props) {
    counter: state.counter + props.increment;
});

//! Individual var's should have separate setState calls

var TestClass = function (_React$Component2) {
    _inherits(TestClass, _React$Component2);

    function TestClass(props) {
        _classCallCheck(this, TestClass);

        var _this3 = _possibleConstructorReturn(this, (TestClass.__proto__ || Object.getPrototypeOf(TestClass)).call(this, props));

        _this3.state = {
            posts: [],
            comments: []
        };
        return _this3;
    }

    _createClass(TestClass, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            fetchPosts().then(function (res) {
                _this4.setState({
                    posts: res.posts
                });
            });

            fetchComments().then(function (res) {
                _this4.setState({
                    comments: res.comments
                });
            });
        }
    }]);

    return TestClass;
}(React.Component);

//! Top-down data flow?? State's are owned by their individual component


function FormattedDate(props) {
    return React.createElement(
        'h2',
        null,
        'It is ',
        props.date.toLocaleTimeString(),
        '.'
    );
}

React.createElement(FormattedDate, { date: this.state.date });
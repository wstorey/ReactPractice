'use strict';

//! Preventing default

var _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ActionLink() {
    function handleActionClick(e) {
        e.preventDefault();
        console.log('The link was clicked');
    }

    return React.createElement(
        'a',
        { href: '#', onClick: handleActionClick },
        'Click me!'
    );
}

//! Listening

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.state = { isToggleOn: true };

        // Binding to make 'this' work in the callback
        // Class methods are not bound be default
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Toggle, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (state) {
                return {
                    isToggleOn: !state.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.handleClick },
                this.state.isToggleOn ? 'ON' : 'OFF'
            )

            //! Use an arrow function in the callback if you dont want to do bind or use experimental class syntax
            //! Better to bind in the constructor tho

            // <button onClick={() => this.handleClick()}>
            //      {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>
            ;
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.querySelector('#root'));

//! Passing data to event handlers
React.createElement(
    'button',
    { onClick: function onClick(e) {
            return _this2.deleteRow(id, e);
        } },
    'Delete Row'
);
React.createElement(
    'button',
    { onClick: this.deleteRow.bind(this, id) },
    'Delete Row'
);
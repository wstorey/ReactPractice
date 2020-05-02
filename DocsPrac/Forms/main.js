'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
    _inherits(NameForm, _React$Component);

    function NameForm(props) {
        _classCallCheck(this, NameForm);

        // this.state = {value: ''}

        // this.state = {
        //     value: 'Write an en essay 50000 words :)'
        // };

        var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

        _this.state = { value: 'coconut' };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(NameForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Pick your fav fruit',
                    React.createElement(
                        'select',
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement(
                            'option',
                            { value: 'grapefruit' },
                            'Grapefruit'
                        ),
                        React.createElement(
                            'option',
                            { value: 'lime' },
                            'Lime'
                        ),
                        React.createElement(
                            'option',
                            { value: 'coconut' },
                            'Coconut'
                        ),
                        React.createElement(
                            'option',
                            { value: 'mango' },
                            'Mango'
                        )
                    )
                ),
                React.createElement(
                    'button',
                    null,
                    'Submit'
                )
            );
        }
    }]);

    return NameForm;
}(React.Component);

ReactDOM.render(React.createElement(NameForm, null), document.querySelector('#root'));

var Reservation = function (_React$Component2) {
    _inherits(Reservation, _React$Component2);

    function Reservation(props) {
        _classCallCheck(this, Reservation);

        var _this2 = _possibleConstructorReturn(this, (Reservation.__proto__ || Object.getPrototypeOf(Reservation)).call(this, props));

        _this2.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        _this2.handleInputChange = _this2.handleInputChange.bind(_this2);
        return _this2;
    }

    _createClass(Reservation, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.name === 'isGoing' ? target.checked : target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                null,
                React.createElement(
                    'label',
                    null,
                    'Is going:',
                    React.createElement('input', {
                        name: 'isGoing',
                        type: 'checkbox',
                        checked: this.state.isGoing,
                        onChange: this.handleInputChange })
                ),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    'Number of Guests:',
                    React.createElement('input', {
                        name: 'numberOfGuests',
                        type: 'number',
                        value: this.state.numberOfGuests,
                        onChange: this.handleInputChange })
                )
            );
        }
    }]);

    return Reservation;
}(React.Component);

ReactDOM.render(React.createElement(Reservation, null), document.querySelector('#root'));
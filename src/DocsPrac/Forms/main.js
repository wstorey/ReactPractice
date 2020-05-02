'use strict';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value: ''}

        // this.state = {
        //     value: 'Write an en essay 50000 words :)'
        // };

        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                {/* Input */}
                {/* <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}

                {/* Textarea */}
                {/* <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label> */}

                {/* Select */}
                <label>
                    Pick your fav fruit
                    {/* For multiple selections - <select multiple={true} value={['B', 'C']}> */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <button>Submit</button> 
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.querySelector('#root')
);

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                    Number of Guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation />,
    document.querySelector('#root')
);
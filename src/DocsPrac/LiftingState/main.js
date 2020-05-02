'use strict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>Water would boil</p>
    } else {
        return <p>Water would not boil</p>
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={temperature} 
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.querySelector('#root')
);

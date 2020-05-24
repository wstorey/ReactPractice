import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = props => {
    return (
        <div>
            <p>{props.text}</p>
            <p>{props.addFunc(1, 2)}</p>
        </div>
    );
}

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{this.props.myFunction(10, 12)}</div>
        <div>{this.props.myFunctionAlso(10, 2)}</div>
        <div>{this.props.myArr[2]}</div>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
            </header>
        );
    }
}

class App extends Component {

    addAlso(a, b) {
        return a + b;
    }

    render() {
        // const add = (a, b) => a + b;
        return (
            <div className="App">
                <Header 
                title="Hello" 
                num={4} 
                myArr = {[1,2,3]}
                //myFunction={add}
                myFunction={this.addAlso}
                myFunctionAlso={(a, b) => a + b}
                myObj={{
                    a: 5,
                    b: 6
                }}/>
                <Body text="pretty cool" addFunc={this.addAlso} />
                <Body text="pretty neat" addFunc={this.addAlso} />
            </div>
        );
    }
}

export default App;

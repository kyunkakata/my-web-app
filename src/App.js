import logo from "./logo.svg";
import "./App.css";
import TestA from "./components/TestComponent/TestA";
import React, { Component } from "react";
function App() {
  // state or functional component React.Element

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count: 0 </div>
        <button>count</button>
        {/* <Time currentTime={10} />
        <Time></Time>
        <TestA /> */}
        <Chair number={1} name={"Anh"} />
        <Chair number={2} />
      </header>
    </div>
  );
}

function Time(props) {
  return <div>curreet is: {props.currentTime}</div>;
}

function Chair(props) {
  // return React.Element
  return (
    <div>
      chair {props.number} + {props.name}
    </div>
  );
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let anh = new Person("anh", 29);
let em = new Person("em", 17);

//
// factory.

export default App;

// tao ra 2 function component va su dung chung:
//

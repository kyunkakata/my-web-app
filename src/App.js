import logo from "./logo.svg";
import "./App.css";
import TestA from "./components/TestComponent/TestA";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React composite
        </a>
        <TestA />
      </header>
    </div>
  );
}
let test = true;

export default App;

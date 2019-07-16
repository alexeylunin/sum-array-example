import React, { useState } from "react";
import "./App.css";
import findSum from "./utils/findSum";

function App() {
  const [value, setValue] = useState("[0,1,2,3,4,5]");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateResult = () => {
    setError(null);
    let array = [];
    try {
      array = JSON.parse(value);
      if (typeof array.length !== "number") {
        setError("Please enter valid array");
        return;
      }
    } catch (e) {
      setError("Please enter valid array");
      return;
    }
    const sum = findSum(array);
    setResult(sum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <textarea
            className="App-text"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
          <div className="App-hint">Example: [0,1,2,3,4,5]</div>
        </div>

        {error && <div className="App-error">{error}</div>}
        <button className="App-button" onClick={calculateResult}>
          Calculate
        </button>
        {result && <div>Result: {result}</div>}
      </header>
    </div>
  );
}

export default App;

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
      setError(
        "Please check the text in the textarea field. There must paste correct array value"
      );
      return;
    }
    const sum = findSum(array);
    setResult(sum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <textarea
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </p>
        <div>Example: [0,1,2,3,4,5]</div>
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

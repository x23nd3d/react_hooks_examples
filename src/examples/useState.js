import React, {useState} from "react";

function computeCalculations() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {

  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeCalculations());
  const [counter, setCounter] = useState(() => {
    return computeCalculations();
  });

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now()
  });

  function inc() {
    // setCounter(counter + 1);
    setCounter(prev => prev + 1);
  }

  function dec() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => ({
      ...prev, title: 'New title'
    }))
  }

  return (
    <div>
      <h3>Counter {counter}</h3>
      <button className="btn btn-success" onClick={inc}>Add</button>
      <button  className="btn btn-danger" onClick={dec}>Sub</button>
      <button  className="btn btn-warning" onClick={updateTitle}>Change title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>

    </div>
  );
}

export default App;

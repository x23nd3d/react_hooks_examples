import React, {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}

function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(() => ({
    color: colored ? "red" : "black"
  }), [colored]);

  useEffect(() => {
    console.log('Styles changed')
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Computed number: {computed}</h1>
      <button className={"btn btn-success"} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={"btn btn-danger"} onClick={() => setNumber(prev => prev - 1)}>Sub</button>
      <button className={"btn btn-warning"} onClick={() => setColored(prev => !prev)}>Change</button>
    </>
  );
}

export default App;

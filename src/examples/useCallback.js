import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import UseCallbackTestComponent from "./examples/useCallbackTestComponent";


function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black"
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
  }, [count])



  return (
    <>
      <h1 style={styles}>Number of Elements: {count}</h1>
      <button className={"btn btn-success"} onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className={"btn btn-warning"} onClick={() => setColored(prev => !prev)}>Change</button>

      <UseCallbackTestComponent getItems={generateItemsFromAPI}/>


    </>
  );
}

export default App;

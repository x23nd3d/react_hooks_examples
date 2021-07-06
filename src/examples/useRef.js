import React, {useState, useEffect, useRef} from "react";

function App() {

  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  let lastState = useRef('');

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);

  });

  useEffect(() => {
    lastState.current = value;
  }, [value])

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Number of renders {renderCount.current}</h1>
      <h1>Last state {lastState.current}</h1>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;

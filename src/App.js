import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  }

  const clear = () => {
    setValue('');
  }

  return {
    bind: {value, onChange},
    value,
    clear

  }
}

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function App() {

  const name = useInput('');
  const lastName = useInput('')

  useLogger(name.value);
  useLogger(lastName.value);

  return (
    <div className="container">
      <input type="text" {...name.bind}/>
      <input type="text" {...lastName.bind}/>
      <h1 onClick={name.clear}>{name.value}</h1>
      <h2 onClick={lastName.clear}>{lastName.value}</h2>
    </div>
  );
}

export default App;

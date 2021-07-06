import React, {useState, useEffect} from "react";

function App() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  });

  // useEffect(() => {
  //   console.log('Render')
  // })

  // to follow the particular state change and implement changes/additional adjustments.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log('Clean type');
    }
  }, [type]);

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY
    });
  }

  useEffect(() => {
    console.log('Component did mount');

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [])

  return (
    <div>
      <h3>Resource: {type}</h3>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;

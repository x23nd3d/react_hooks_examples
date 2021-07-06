import React, {useEffect, useState} from 'react';

const UseCallbackTestComponent = ({getItems}) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems())
    console.log('Use test')
  }, [getItems])

  return (
    <ul>
      {
        items.map(item => <li key={item}>{item}</li>)
      }
    </ul>
  )
}

export default UseCallbackTestComponent
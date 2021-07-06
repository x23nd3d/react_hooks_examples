import React from 'react';
import {useAlert} from "./useContextAlertProvider";

const UseContextTestComponent = props => {

  const {show} = useAlert();

return (

    <>
      <h1>Hello from Context example</h1>
      <button className={"btn btn-success"} onClick={() => show('Hello, test!')}>Show alert!</button>
    </>
    )
}

export default UseContextTestComponent;
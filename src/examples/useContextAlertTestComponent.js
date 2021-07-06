import React from 'react';
import {useAlert} from "./useContextAlertProvider";


const UseContextAlertTestComponent = props => {

  const alert = useAlert();

  if (!alert.visible) return null;

return (

    <div className="alert alert-danger" onClick={alert.hide}>
      {alert.text}
    </div>
    )
}

export default UseContextAlertTestComponent
// import React, {useContext, useState, useReducer} from 'react';
//
// const AlertContext = React.createContext(null);
//
// export const useAlert = () => {
//   return useContext(AlertContext)
// }
//
// const UseContextAlertProvider = ({children}) => {
//
//   const [alert, setAlert] = useState(false);
//
//   const toggle = () => {
//     setAlert(prev => !prev);
//   }
//
//   return (
//     <AlertContext.Provider value={{
//       visible: alert,
//       toggle
//     }}>
//       {children}
//     </AlertContext.Provider>
//     )
// }
//
// export default UseContextAlertProvider;


// WITH USEREDUCER


import React, {useContext, useState, useReducer} from 'react';

const AlertContext = React.createContext(null);

export const useAlert = () => {
  return useContext(AlertContext)
}

const HIDE_ALERT = "HIDE_ALERT";
const SHOW_ALERT = "SHOW_ALERT";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, visible: true, text: action.text}
    case HIDE_ALERT:
      return {...state, visible: false}
    default:
      return state
  }
}

const UseContextAlertProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = text => dispatch({type: SHOW_ALERT, text});
  const hide = () => dispatch({type: HIDE_ALERT});


  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show, hide
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default UseContextAlertProvider;
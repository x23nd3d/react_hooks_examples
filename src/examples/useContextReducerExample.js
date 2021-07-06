import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import UseContextTestComponent from "./examples/useContextTestComponent";
import UseContextAlertTestComponent from "./examples/useContextAlertTestComponent";
import UseContextAlertProvider from "./examples/useContextAlertProvider";


function App() {

  return (
    <UseContextAlertProvider>
      <div className="container pt-3">
        <UseContextAlertTestComponent/>
        <UseContextTestComponent/>
      </div>
    </UseContextAlertProvider>
  );
}

export default App;

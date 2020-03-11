import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Resume from "../src/components/Resume/Resume";
import "./App.scss";

function App() {
  const componentRef = useRef();
  return (
    <div className="app-container">
      <ReactToPrint
        trigger={() => <button>Print my resume</button>}
        content={() => componentRef.current}
      ></ReactToPrint>
      <div ref={componentRef}>
        <Resume />
      </div>
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import { data } from "./data/data";
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
        <div className="resume-container">
          <Header {...data.aboutMe} />
          <main className="data-container">
            <aside className="left-aside">
              <Experience experiences={data.experiences} />
              <Education educations={data.educations} />
            </aside>
            <aside className="right-aside">
              {/* <Summary />
              <Heading headingData="SKILLS" />
              <Heading headingData="LANGUAGES" />
              <Heading headingData="PASSIONS" /> */}
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

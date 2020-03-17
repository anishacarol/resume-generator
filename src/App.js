import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Summary from "./components/Summary/Summary";
import Skills from "./components/Skills/Skills";
import { data } from "./data/data";
import "./App.scss";
import Languages from "./components/Languages/Languages";
import Portfolio from "./components/Portfolio/Portfolio";

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
              <Summary summary={data.aboutMe.summary} />
              <Experience experiences={data.experiences} />
              <Portfolio portfolio={data.portfolio} />
            </aside>
            <aside className="right-aside">
              <Skills skills={data.skills} />
              <Languages languages={data.languages} />
              <Education educations={data.educations} />
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

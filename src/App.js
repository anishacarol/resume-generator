import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import { data } from "./data/data";
import "./App.scss";
import Languages from "./components/Languages/Languages";
import Portfolio from "./components/Portfolio/Portfolio";
import Interests from "./components/Interests/Interests";

function App() {
  const componentRef = useRef();
  return (
    <div className="app-container">
      <div ref={componentRef}>
        <div className="resume-container">
          <Header {...data.aboutMe} />
          <main className="data-container">
            <aside className="left-aside">
              <Experience experiences={data.experiences} />
              <Portfolio portfolio={data.portfolio} />
            </aside>
            <aside className="right-aside">
              <Skills skills={data.skills} />
              <Education educations={data.educations} />
              <Languages languages={data.languages} />
              <Interests interests={data.hobbies} />
            </aside>
          </main>
        </div>
      </div>
      <ReactToPrint
        trigger={() => <button>Print my resume</button>}
        content={() => componentRef.current}
      ></ReactToPrint>
    </div>
  );
}

export default App;

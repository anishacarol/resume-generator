import React from "react";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const LeftAside = () => {
  return (
    <aside className="left-aside">
      <Experience />
      <Education />
    </aside>
  );
};

export default LeftAside;

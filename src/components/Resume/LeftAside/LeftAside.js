import React from "react";
import Heading from "../Heading/Heading";
// import { data } from "../../../data/data";
import Experience from "../Experience/Experience";

const LeftAside = () => {
  return (
    <aside className="left-aside">
      <Experience />
      <Heading headingData="EDUCATION" />
    </aside>
  );
};

export default LeftAside;

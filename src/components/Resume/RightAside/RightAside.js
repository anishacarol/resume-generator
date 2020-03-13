import React from "react";
import Heading from "../Heading/Heading";

const RightAside = () => {
  return (
    <aside className="right-aside">
      <Heading headingData="SUMMARY" />
      <Heading headingData="SKILLS" />
      <Heading headingData="LANGUAGES" />
      <Heading headingData="PASSIONS" />
    </aside>
  );
};

export default RightAside;

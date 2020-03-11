import React from "react";
import Header from "./Header/Header";
import LeftAside from "./LeftAside/LeftAside";
import RightAside from "./RightAside/RightAside";
const Resume = () => {
  return (
    <div className="resume-container">
      <Header />
      <div className="data-container">
        <LeftAside />
        <RightAside />
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import Header from "./Header/Header";
import LeftAside from "./LeftAside/LeftAside";
import RightAside from "./RightAside/RightAside";
const Resume = () => {
  return (
    <div className="resume-container">
      <Header />
      <main className="data-container">
        <LeftAside />
        <RightAside />
      </main>
    </div>
  );
};

export default Resume;

import React from "react";
import Heading from "../Heading/Heading";
import { data } from "../../../data/data";

const LeftAside = () => {
  return (
    <div className="left-aside">
      <Heading headingData={data.headingText.experience} />
      <Heading headingData={data.headingText.education} />
    </div>
  );
};

export default LeftAside;

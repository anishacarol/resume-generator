import React from "react";
import Heading from "../Heading/Heading";
import { data } from "../../../data/data";

const RightAside = () => {
  return (
    <div className="right-aside">
      <Heading headingData={data.headingText.summary} />
      <Heading headingData={data.headingText.skills} />
      <Heading headingData={data.headingText.languages} />
      <Heading headingData={data.headingText.passions} />
    </div>
  );
};

export default RightAside;

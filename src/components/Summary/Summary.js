import React from "react";
import Heading from "../../Heading/Heading";
import { data } from "../../../../data/data";

const Summary = () => {
  return (
    <section>
      <Heading headingData="SUMMARY" />
      <div>
        <p>{data.aboutMe.summary}</p>
      </div>
    </section>
  );
};

export default Summary;

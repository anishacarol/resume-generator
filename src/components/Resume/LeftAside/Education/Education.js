import React from "react";
import Heading from "../../Heading/Heading";
import { data } from "../../../../data/data";
import InnerData from "../../Heading/InnerData";

const Education = () => {
  return (
    <section>
      <Heading headingData="EDUCATION" />
      <ul className="education-container">
        {data.education.map(item => (
          <li key={item}>
            <InnerData
              title={item.title}
              InstiutionName={item.instituteName}
              // calenderIcon={data.calenderIcon}
              date={item.accadamicYear}
              locationIcon={item.locationIcon}
              location={item.location}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;

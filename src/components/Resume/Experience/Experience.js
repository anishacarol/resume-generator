import React from "react";
import Heading from "../Heading/Heading";
import InnerData from "../Heading/InnerData";
import { data } from "../../../data/data";

const Experience = () => {
  return (
    <section>
      <Heading headingData="EXPERIENCE" />
      <ul>
        {data.experiences.map(item => (
          <li key={item}>
            <InnerData
              designation={item.designation}
              companyName={item.companyName}
              // calenderIcon={data.calenderIcon}
              date={item.date}
              locationIcon={item.locationIcon}
              location={item.location}
              subheading={item.subheading}
              roles={item.roles}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Experience;

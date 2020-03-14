import React from "react";
import Heading from "../ContentTitle/ContentTitle";
import ProfileItem from "../ProfileItem/ProfileItem";

const Education = ({ educations }) => (
  <section>
    <Heading headingData="EDUCATION" />
    <ul className="education-container">
      {educations.map(item => (
        <li key={item.title}>
          <ProfileItem
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

export default Education;

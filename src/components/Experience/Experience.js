import React from "react";
import Heading from "../ContentTitle/ContentTitle";
import ProfileItem from "../ProfileItem/ProfileItem";

const Experience = ({ experiences }) => (
  <section>
    <Heading headingData="EXPERIENCE" />
    <ul className="experience-container">
      {experiences.map((item, index) => (
        <li key={index}>
          <ProfileItem
            title={item.designation}
            InstiutionName={item.companyName}
            date={item.date}
            location={item.location}
            subheading={item.subheading}
            roles={item.roles}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;

import React from "react";
import Skill from "./Skill/Skill";
import ContentTitle from "../ContentTitle/ContentTitle";

const Skills = ({ skills }) => {
  return (
    <section>
      <ContentTitle headingData="Skills" />

      <ul>
        {skills.map((item, index) => (
          <li key={index}>
            <Skill title={item.title} skill={item.skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;

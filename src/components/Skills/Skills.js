import React from "react";
import Skill from "./Skill/Skill";
import ContentTitle from "../ContentTitle/ContentTitle";

const Skills = ({ skills }) => {
  return (
    <section className="skills-wrapper">
      <ContentTitle headingData="SKILLS" />

      <ul className="skills-container">
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

import React from "react";

const Skill = ({ title, skill }) => (
  <section className="skill-container">
    <h4>{title}</h4>
    <div>
      {skill.map((item, index) => (
        <span className="skill-item" key={index}>
          {item}
        </span>
      ))}
    </div>
  </section>
);
export default Skill;

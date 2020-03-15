import React from "react";

const Skill = ({ title, skill }) => (
  <section>
    <h4>{title}</h4>
    <div>
      <ul>
        {skill.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);
export default Skill;

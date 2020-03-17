import React from "react";

const Project = ({ title, projectInfo }) => (
  <section className="project-wrapper">
    <h5>{title}</h5>
    <p>{projectInfo}</p>
  </section>
);

export default Project;

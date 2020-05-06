import React from "react";

const Project = ({ title, projectInfo, projectLink }) => (
  <section className="project-wrapper">
    <h5>{title}</h5>
    <p>
      {projectInfo} <a href={projectLink}>{projectLink}</a>
    </p>
  </section>
);

export default Project;

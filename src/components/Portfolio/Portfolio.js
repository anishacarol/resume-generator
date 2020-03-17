import React from "react";
import Project from "./Project/Project";
import ContentTitle from "../ContentTitle/ContentTitle";

const Portfolio = ({ portfolio }) => (
  <section className="portfolio-wrapper">
    <ContentTitle headingData="PORTFOLIO" />
    <div>
      {portfolio.map((item, index) => (
        <Project
          key={index}
          title={item.projectTitle}
          projectInfo={item.projectInfo}
        />
      ))}
    </div>
  </section>
);
export default Portfolio;

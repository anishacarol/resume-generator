import React from "react";
import ContentTitle from "./../ContentTitle/ContentTitle";

const Interests = ({ interests }) => {
  return (
    <section>
      <ContentTitle headingData="INTERESTS" />
      <ul className="interest-wrapper">
        {interests.map(item => (
          <li key="item">{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default Interests;

import React from "react";

const ContentTitle = ({ headingData }) => {
  return (
    <span className="heading-container">
      <h2>{headingData}</h2>
      <hr></hr>
    </span>
  );
};

export default ContentTitle;

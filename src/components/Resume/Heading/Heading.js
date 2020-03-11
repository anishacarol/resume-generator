import React from "react";

const Heading = ({ headingData }) => {
  return (
    <div className="heading-container">
      <h2>{headingData}</h2>
      <hr></hr>
    </div>
  );
};

export default Heading;

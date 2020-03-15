import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";

const Summary = ({ summary }) => {
  return (
    <section>
      <ContentTitle headingData="SUMMARY" />
      <div>
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default Summary;

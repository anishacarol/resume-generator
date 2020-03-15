import React from "react";

const Language = ({ title, level }) => (
  <section>
    <div>
      <p>{title}</p>
      <div>{level}</div>
    </div>
  </section>
);

export default Language;

import React from "react";

const IconText = ({ text, children }) => (
  <div className="icon-info">
    <p>{text}</p>
    <div> {children}</div>
  </div>
);

export default IconText;

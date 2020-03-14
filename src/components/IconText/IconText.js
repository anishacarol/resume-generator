import React from "react";

const IconText = ({ iconUrl, text }) => (
  <div className="icon-info">
    <i>{iconUrl}</i>
    <p>{text}</p>
  </div>
);

export default IconText;

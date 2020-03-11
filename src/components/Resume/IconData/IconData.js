import React from "react";

const IconData = ({ icon, iconInfo }) => {
  return (
    <div className="icon-info">
      <i>{icon}</i>
      <p>{iconInfo}</p>
    </div>
  );
};

export default IconData;

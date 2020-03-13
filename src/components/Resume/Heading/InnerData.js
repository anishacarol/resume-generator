import React from "react";
import IconData from "../IconData/IconData";

const InnerData = ({
  title,
  InstiutionName,
  calenderIcon,
  date,
  locationIcon,
  location,
  subheading,
  roles
}) => {
  return (
    <div className="innerData-container">
      <h3>{title}</h3>
      <h4>{InstiutionName}</h4>
      <div className="innerData-iconStyle">
        <IconData icon={calenderIcon} iconInfo={date} />
        <IconData icon={locationIcon} iconInfo={location} />
      </div>
      <p>{subheading}</p>
      {roles && (
        <ul>
          {roles.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InnerData;

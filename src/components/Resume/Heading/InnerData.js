import React from "react";
import IconData from "../IconData/IconData";

const InnerData = ({
  designation,
  companyName,
  calenderIcon,
  date,
  locationIcon,
  location,
  subheading,
  roles
}) => {
  return (
    <div>
      <h3>{designation}</h3>
      <h4>{companyName}</h4>
      <IconData icon={calenderIcon} iconInfo={date} />
      <IconData icon={locationIcon} iconInfo={location} />
      <p>{subheading}</p>
      <ul>
        {roles.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InnerData;

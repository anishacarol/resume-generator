import React from "react";
import IconText from "../IconText/IconText";

const ProfileItem = ({
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
    <div className="profileItem-container">
      <h3>{title}</h3>
      <h4>{InstiutionName}</h4>
      <div className="profileItem-iconStyle">
        <IconText iconUrl={calenderIcon} text={date} />
        {location ? <IconText iconUrl={locationIcon} text={location} /> : null}
      </div>

      {roles && (
        <ul className="roles">
          {roles.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileItem;

import React from "react";
import IconText from "../IconText/IconText";
import Summary from "../Summary/Summary";

const Header = ({
  contactNo,
  name,
  designation,
  location,
  email,
  summary
  // profileImgUrl
}) => {
  return (
    <div className="header-container">
      {/* <div className="headerText-container"> */}
      <div className="name-designation-container">
        <div className="name-container">
          <h1>{name}</h1>
        </div>
        <div>
          <p className="designation">{designation}</p>
        </div>
        <Summary summary={summary} />
      </div>
      <div className="contact-info">
        {/* <div className="contactInfo-left"> */}
        <div>
          <IconText iconUrl={null} text={contactNo} />
        </div>
        <div>
          <IconText iconUrl={null} text={location} />
        </div>
        <div>
          <IconText iconUrl={null} text={email} />
        </div>
        {/* </div> */}
        {/* <div className="contactInfo-right">
           
          </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;

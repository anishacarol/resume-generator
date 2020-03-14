import React from "react";
import IconText from "../IconText/IconText";

const Header = ({
  contactNo,
  name,
  designation,
  location,
  email,
  profileImgUrl
}) => {
  return (
    <div className="header-container">
      <div className="headerText-container">
        <div className="name-designation-container">
          <div className="name-container">
            <h1>{name}</h1>
          </div>
          <div>
            <p>{designation}</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contactInfo-left">
            <div>
              <IconText iconUrl={null} text={contactNo} />
            </div>
            <div>
              <IconText iconUrl={null} text={location} />
            </div>
          </div>
          <div className="contactInfo-right">
            <div>
              <IconText iconUrl={null} text={email} />
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="person-img" src={profileImgUrl} alt="person"></img>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import IconText from "../IconText/IconText";
import Summary from "../Summary/Summary";
import MobileIcon from "../../images/icons/MobileIcon";
import LocationIcon from "../../images/icons/LocationIcon";
import EmailIcon from "../../images/icons/EmailIcon";
import LinkedInIcon from "../../images/icons/LinkedInIcon";
import GithubIcon from "../../images/icons/GithubIcon";

const Header = ({
  contactNo,
  name,
  designation,
  location,
  email,
  linkedIn,
  github,
  summary
  // profileImgUrl
}) => {
  return (
    <div className="header-container">
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
        <div>
          <IconText text={contactNo}>
            <div>
              <MobileIcon />
            </div>
          </IconText>
        </div>
        <div>
          <IconText text={location}>
            <LocationIcon />
          </IconText>
        </div>
        <div>
          <IconText text={email}>
            <EmailIcon />
          </IconText>
        </div>
        {linkedIn ? (
          <div>
            <IconText text={linkedIn}>
              <LinkedInIcon />
            </IconText>
          </div>
        ) : null}
        <div>
          <IconText text={github}>
            <GithubIcon />
          </IconText>
        </div>
      </div>
    </div>
  );
};

export default Header;

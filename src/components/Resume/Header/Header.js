import React from "react";
import { data } from "../../../data/data";
import IconData from "../IconData/IconData";

const Header = () => {
  return (
    <div className="header-container">
      <div className="headerText-container">
        <div className="name-designation-container">
          <div className="name-container">
            <h1>{data.aboutMe.name}</h1>
          </div>
          <div>
            <p>{data.aboutMe.designation}</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contactInfo-left">
            <div>
              <IconData
                icon={data.contactIcon}
                iconInfo={data.aboutMe.contactNo}
              />
            </div>
            <div>
              <IconData
                icon={data.locationIcon}
                iconInfo={data.aboutMe.location}
              />
            </div>
          </div>
          <div className="contactInfo-right">
            <div>
              <IconData icon={data.emailIcon} iconInfo={data.aboutMe.email} />
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img
          className="person-img"
          src={data.aboutMe.profileImgUrl}
          alt="person"
        ></img>
      </div>
    </div>
  );
};

export default Header;

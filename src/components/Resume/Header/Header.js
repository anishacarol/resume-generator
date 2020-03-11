import React from "react";
import { data } from "../../../data/data";
import IconData from "../IconData/IconData";

const Header = () => {
  return (
    <div className="header-container">
      <div className="headerText-container">
        <div className="name-designation-container">
          <h1>{data.name}</h1>
          <p>{data.designation}</p>
        </div>
        <div className="contact-info">
          <div className="contactInfo-left">
            <div>
              <IconData icon={data.contactIcon} iconInfo={data.contactNo} />
            </div>
            <div>
              <IconData icon={data.locationIcon} iconInfo={data.locationText} />
            </div>
          </div>
          <div className="contactInfo-right">
            <div>
              <IconData icon={data.emailIcon} iconInfo={data.email} />
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="person-img" src={data.personImg} alt="person"></img>
      </div>
    </div>
  );
};

export default Header;

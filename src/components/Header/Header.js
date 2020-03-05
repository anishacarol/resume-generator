import React from "react";
import { Container } from "../GlobalStyles/globalStyles.styled";
import { images } from "../Images/images";
import { HeaderWrapper } from "./Header.styled";
import useInputValue from "../customHooks/useInputValue";

const Header = () => {
  const [value, handleChange] = useInputValue({ name: "" });
  const [value2, handleChange2] = useInputValue({ designation: "" });
  return (
    <Container>
      <HeaderWrapper>
        <div className="img-wrapper">
          <img src={images.person} alt="person"></img>
        </div>
        <div className="text-wrapper">
          <input
            className="input name"
            name="name"
            type="text"
            placeholder="Name"
            value={value.name}
            onChange={handleChange}
          ></input>
          <input
            className="input designation"
            name="designation"
            type="text"
            placeholder="Designation"
            value={value2.name}
            onChange={handleChange2}
          ></input>
        </div>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

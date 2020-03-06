import React from "react";
import { LeftWrapper, RightWrapper, DataWrapper } from "./Data.styled";
import LeftAsideData from "./AsideData/LeftAsideData/LeftAsideData";
import RightAsideData from "./AsideData/RightAsideData/RightAsideData";

const Data = () => {
  return (
    <DataWrapper>
      <LeftWrapper>
        <LeftAsideData />
      </LeftWrapper>
      <RightWrapper>
        <RightAsideData />
      </RightWrapper>
    </DataWrapper>
  );
};

export default Data;

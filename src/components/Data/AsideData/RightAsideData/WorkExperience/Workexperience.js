import React from "react";
import useInputValue from "../../../../customHooks/useInputValue";
import { WorkExperianceWrapper } from "./WorkExperience.styled";

const WorkExperience = () => {
  const [value, handleChanges] = useInputValue({ workExperienceData: "" });

  return (
    <WorkExperianceWrapper>
      <h1>WORK EXPERIENCE</h1>
      <hr></hr>
      <textarea
        type="text"
        value={value.profileData}
        name="workExperienceData"
        onChange={handleChanges}
      ></textarea>
    </WorkExperianceWrapper>
  );
};

export default WorkExperience;

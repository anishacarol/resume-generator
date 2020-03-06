import React from "react";
import useInputValue from "../../../../customHooks/useInputValue";
import { ProfileWrapper } from "./Profile.styled";

const Profile = () => {
  const [value, handleChanges] = useInputValue({ profileData: "" });
  return (
    <ProfileWrapper>
      <h1>PROFILE</h1>
      <hr></hr>
      <textarea
        type="text"
        value={value.profileData}
        name="profileData"
        onChange={handleChanges}
      ></textarea>
    </ProfileWrapper>
  );
};

export default Profile;

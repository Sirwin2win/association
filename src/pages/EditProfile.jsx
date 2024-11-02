import React from "react";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Profile Here</h1>
      <p>{}id</p>
    </div>
  );
};

export default EditProfile;

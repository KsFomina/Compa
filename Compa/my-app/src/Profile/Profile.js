import React from "react";
import { Modal, Button } from "antd";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="container">
        <img className="profile-image" />
        <div>
          <h2 className="h2-profile">user name</h2>

          <div>information about user</div>
        </div>
        <div>tegs</div>
        <div>Мои события</div>
        <div>photo</div>
      </div>
    </>
  );
};

export default Profile;

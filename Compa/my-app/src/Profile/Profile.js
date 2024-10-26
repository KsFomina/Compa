import React from "react";
import "./Profile.css";
import PhotoGallery from "./PhotoGallery";

const Profile = () => {
  const data = ["tag1", "tag2", "tag3"]; // Данные для тегов

  return (
    <>
      <div className="container">
        <div className="profile-container">
          <img className="profile-image" />
          <div>
            <h2 className="h2-profile">user name</h2>
            <div>
              <div className="InfoAboutUser-profile">
                information about user information about user information about
                user information about user
              </div>
            </div>
          </div>

          <ul className="tegList-profile">
            {data.map((item, index) => (
              <li key={index}>
                <div className="teg-profile">{item}</div>
              </li>
            ))}
          </ul>
          <div className="MY-event">Мои события</div>
          <div>events events</div>
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

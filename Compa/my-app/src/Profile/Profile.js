import React from "react";
import "./Profile.css";
import PhotoGallery from "./PhotoGallery";

const Profile = () => {
  const data = ["tag1", "tag2", "tag3", "teg4"]; // Данные для тегов

  return (
    <>
      <div className="container">
        <div className="profile-container">
          <img className="profile-image" />
          <div>
            <div className="block-style">
              <h2 className="h2-profile">user name</h2>
              <img src="/Group 7.png" className="img-chats" />
            </div>
            <div>
              <div className="InfoAboutUser-profile">
                information about user information about user information about
                user information about user
              </div>
            </div>
          </div>

          <div className="block-style1">
            <ul className="tegList-profile">
              {data.map((item, index) => (
                <li key={index}>
                  <div className="teg-profile">{item}</div>
                </li>
              ))}
            </ul>
            <div>
              <button className="tegs-plus">
                <span>+</span>
              </button>
            </div>
          </div>

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

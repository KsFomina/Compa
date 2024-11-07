import React from "react";
import "./Profile.css";
import PhotoGallery from "./PhotoGallery";

const Profile = () => {
  const data = ["tag1", "tag2", "tag3", "teg4", "teg5", "teg6", "teg7"]; // Данные для тегов

  return (
    <>
      <div className="container1">
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

          <div class="block-style1">
            <ul class="tegList-profile">
              {data.map((item, index) => (
                <li key={index}>
                  <div class="teg-profile">{item}</div>
                </li>
              ))}
              <li class="teg-button">
                <button class="tegs-plus">+</button>
              </li>
            </ul>
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

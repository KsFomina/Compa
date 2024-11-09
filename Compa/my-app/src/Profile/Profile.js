import React from "react";
import "./Profile.css";
import PhotoGallery from "./PhotoGallery";
import TagName from "./TagName";  
import {
  useGetUserQuery,
} from ".././redux/Compa.WebAPI";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/userData";

const Profile = () => {
  const data1 = ["tag1", "tag2", "tag3", "teg4", "teg5", "teg6", "teg7"]; // Данные для тегов

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userData.userId);
  dispatch(setUserId(userId));
  console.log(userId);
  const {data: user, isLoading, error}=useGetUserQuery(userId);
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  console.log(user)
  return (
    <>
      <div className="container1">
        <div className="profile-container">
          <img className="profile-image"/>
          <div>
            <div className="block-style">
              <h2 className="h2-profile"> {user?.name} {user?.surname}</h2>
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
              {user?.tagList?.map((item, index) => (
                <li key={index}>
                  <TagName tagId={item} />
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

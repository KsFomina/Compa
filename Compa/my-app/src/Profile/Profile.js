import React from "react";
import "./Profile.css";
import PhotoGallery from "./PhotoGallery";
import TagName from "./TagName";  
import {
  useGetUserQuery,
} from ".././redux/Compa.WebAPI";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/userData";
import MyEvents from "./MyEvents";

const Profile = () => {
  
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
                {user?.description}
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
          <div>
            {user?.arrangementsIds.map((item, index) => (
                  <MyEvents EventId={item} />
                  ))}
          </div>
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

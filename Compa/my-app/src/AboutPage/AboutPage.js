import React from "react";
import "./AboutPage.css";
import {
  useGetUserQuery,
  useGetTagQuery,
  useAddUserOnArrMutation,
} from ".././redux/Compa.WebAPI";
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/userData";

const AboutPage = ({
  name,
  about,
  date,
  maxPeople,
  people,
  image,
  createrId,
  tagId,
  city,
  place,
  time,
  idArr,
  handleCancel,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.userId);
  dispatch(setUserId(user));

  const { data: creater, isLoading, error } = useGetUserQuery(createrId);
  const { data: tag, isLoading1, error1 } = useGetTagQuery(tagId);
  const [postArrangement] = useAddUserOnArrMutation();
  if (isLoading || isLoading1) {
    return <></>;
  }
  if (error || error1) {
    return <></>;
  }

  const AddUser = async () => {
    await postArrangement({
      arrangementId: idArr,
      userId: user,
    });
  };

  return (
    <div>
      <button onClick={handleCancel} className="buttonClose1">
        <svg
          width="30"
          height="30"
          viewBox="0 0 58 58"
          fill="#FF735C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="17"
            y="24"
            width="2.49259"
            height="22.575"
            rx="1.2463"
            transform="rotate(-45 19.8073 22.5698)"
            fill="white"
            stroke="white"
          />
          <rect
            x="20"
            y="36"
            width="2.49259"
            height="22.575"
            rx="1.2463"
            transform="rotate(-135 21.5698 38.5328)"
            fill="white"
            stroke="white"
          />
        </svg>
      </button>
      <div className="about-style">
        <img className="about-image" src={image} />
        <h2 className="h2-style1">{name}</h2>
        <div className="about-div1">
          <div className="about-p1">Участников:</div>{" "}
          <div className="about-p11">{people}</div>
          <div className="about-p11">/</div>
          <div className="about-p11">{maxPeople}</div>
        </div>
        <div className="about-div2">
          <div className="about-p2">Организатор:</div>
          <div className="about-p21">
            {creater?.name} {creater.surname}
          </div>
        </div>

        <p className="about-p3">{about}</p>

        <div className="teg-about"> {tag?.tagName} </div>
        <div className="time-style1">
          <div className="about-img">
            <img src="/Group 45.jpg" alt="время" className="images" />
            <div>{date}</div>
          </div>
          <div className="about-img">
            <img src="/Group 78.jpg" alt="время" className="images" />
            <div>{time}</div>
          </div>
          <div className="about-img">
            <img src="/Group 76.jpg" alt="место" className="images" />
            <div>
              {city} {", "} {place}
            </div>
          </div>
        </div>
      </div>
      <button className="buttonParticipate" onClick={async () => {await AddUser();}}>
        участвовать
      </button>
    </div>
  );
};

export default AboutPage;

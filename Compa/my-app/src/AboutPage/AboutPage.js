import React from "react";
import "./AboutPage.css";

const AboutPage = ({ name, about, time, handleCancel }) => {
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
        <img className="about-image" />
        <h2 className="h2-style1">{name}</h2>
        <div className="about-div1">
          <div className="about-p1">Участников:</div>{" "}
          <div className="about-p11">{}</div>
        </div>
        <div className="about-div2">
          <div className="about-p2">Организатор:</div>
          <div className="about-p21">{}</div>
        </div>

        <p className="about-p3">{about}</p>

        <div className="teg-about"> tegs </div>
        <div className="time-style1">
          <div className="about-img">
            <img src="/Group 45.jpg" alt="время" className="images" />
            <div>{time}</div>
          </div>
          <div className="about-img">
            <img src="/Group 78.jpg" alt="время" className="images" />
            <div>time</div>
          </div>
          <div className="about-img">
            <img src="/Group 76.jpg" alt="место" className="images" />
            <div>place</div>
          </div>
        </div>
      </div>
      <button className="buttonParticipate">участвовать</button>
    </div>
  );
};

export default AboutPage;

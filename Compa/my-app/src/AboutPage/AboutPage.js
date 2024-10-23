import React from "react";
import "./AboutPage.css";

const AboutPage = ({ name, about, time }) => {
  return (
    <div>
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
      <button className="buttonParticipate"> учавствовать</button>
    </div>
  );
};

export default AboutPage;

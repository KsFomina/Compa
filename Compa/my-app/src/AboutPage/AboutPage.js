import React from "react";
import "./AboutPage.css";

const AboutPage = ({ name, about, time }) => {
  return (
    <div className="about-style">
      <img className="about-image" />
      <h2 className="h2-style">{name}</h2>
      <p>Участников:{name}</p>
      <p>Организатор:{}</p>
      <p>{about}</p>
      <div>date</div>
      <div>{time}</div>
      <div>place</div>
    </div>
  );
};

export default AboutPage;

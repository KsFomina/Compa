import React from "react";
import "./EventCard.css";
import AboutPage from "../../AboutPage/AboutPage";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const EventCard = ({ name, teg, people, about, time }) => {
  const navigate = useNavigate();

  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    //navigate(`/event/AboutPage`);
    setVisible(true);
  };

  const maxLength = 90;
  const about1 =
    about.length > maxLength ? about.slice(50, maxLength) + "..." : about;

  return (
    <div onClick={handleClick} className="event-card">
      <div className="event-image">
        <img />
      </div>
      <div className="event-info">
        <h2>{name}</h2>
        <p>{about1}</p>
      </div>
      <div className="content">
        <label className="custom-label">{time}</label>
      </div>
      <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
        <AboutPage name={name} about={about} time={time} />
      </Modal>
    </div>
  );
};
export default EventCard;

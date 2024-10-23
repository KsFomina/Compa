import React from "react";
import "./EventCard.css";
import AboutPage from "../../AboutPage/AboutPage";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const images = {
  "511e4cf1-d4d1-4578-adcc-d7c916589596": "кино.png",
  "b5410e55-c67b-42c5-b762-dba5a9672024": "прогулки.png",
  "fa653e60-9b18-4ac4-a10d-03036bf61719": "спорт.png",
  "898996ab-225f-480f-bcd3-cb4b496d3e88": "кафе.png",
  "e2d7b109-b444-4639-91ce-eac003554cd9": "учеба.png",
  "0883eda4-880e-489c-b019-214e764e97e4": "видеоигры.png",
  "3fa85f64-5717-4562-b3fc-2c963f66afa6": "книги.png",
};


const EventCard = ({ name, tag, people, about, time }) => {
  
  const navigate = useNavigate();

  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    //navigate(`/event/AboutPage`);
    setVisible(true);
  };
  
  const maxLength = 90;
  const about1 =
    about.length > maxLength ? about.slice(50, maxLength) + "..." : about;
    console.log(tag);
  return (
    
    <div onClick={handleClick} className="event-card">
      
      
      <div className="event-image">
      <img src={`${images[tag]}`} class="ev-image" />
      </div>
      <div className="event-info">
        <h2>{name}</h2>
        <p>{about}</p>
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

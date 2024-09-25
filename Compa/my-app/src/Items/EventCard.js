import React from 'react';
import './EventCard.css';
import { Link, useNavigate } from 'react-router-dom';
import EventItem from '../EventItem/EventItem';

const EventCard = ({name, teg, people, about, time}) =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("./EventItem/EventItem.js")
    }
    return (
        <div onClick={handleClick} className="event-card">
        <div className="event-image">
        <img/>
        </div>
        <div className="event-info">
            <h2>{name}</h2>
            <p>Описание: {about}</p>
            <p>Сколько будет: {time}</p>
        </div>
    </div>
    );
};
export default EventCard;
import React from 'react';
import './EventCard.css';
import {useNavigate } from 'react-router-dom';


const EventCard = ({name, teg, people, about, time}) =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/event/${name}`);
    };

    return (
        <div onClick={handleClick} className="event-card">
        <div className="event-image">
        <img/>
        </div>
        <div className="event-info">
            <h2>{name}</h2>
            <p>Описание: {about}</p>
        </div>  
        <div className='content'> 
            <label className='custom-label'>до {time}</label>
        </div>
    </div>
    );
};
export default EventCard;
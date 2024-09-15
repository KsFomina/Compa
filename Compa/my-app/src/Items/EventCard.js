import React from 'react';
import './EventCard.css';

const EventCard = ({name, teg, people, about, time}) =>{
    return (
        <div className="event-card">
            <img className="event-image"/>
            <div className="event-info">
                <h2>{name}</h2>
                <p>Описание: {about}</p>
                <p>Сколько будет: {time}</p>
            </div>
        </div>
    );
};

export default EventCard;
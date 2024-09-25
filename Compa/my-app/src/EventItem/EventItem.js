import React from 'react';
import { useParams } from 'react-router-dom';

const EventItem =() => {
    const {eventName} = useParams();
    return (
        <div>
            <h1>тут: {eventName}</h1>
        </div>
    );
};


export default EventItem;

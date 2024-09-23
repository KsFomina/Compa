import React from 'react';
import './EventCreate.css';

const EventCreate = () => {
    return (
        <div>
            <button class='button' >
            <svg width="58" height="58" viewBox="0 0 58 58" fill="#FF735C" xmlns="http://www.w3.org/2000/svg">
            <rect x="19.8073" y="22.5698" width="2.49259" height="22.575" rx="1.2463" transform="rotate(-45 19.8073 22.5698)" fill="white" stroke="white" />
            <rect x="21.5698" y="38.5328" width="2.49259" height="22.575" rx="1.2463" transform="rotate(-135 21.5698 38.5328)" fill="white" stroke="white" />
            </svg>
            </button>
            <div class="container"> 
            <input class="input_mini" type='text' placeholder='Название события' ></input>
            <input class="input_mini" type='text' placeholder='Название события'></input>
            <input class="input_mini" type='text' placeholder='Название события'></input>
            </div>
        </div>
    );
};

export default EventCreate;
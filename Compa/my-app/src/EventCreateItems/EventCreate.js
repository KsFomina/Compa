import React from 'react';
import './EventCreate.css';
import { useNavigate } from 'react-router-dom';
import { get_data } from './get_data.js'
import TegsButton from './TegsButton.js';

const EventCreate = () => {
    const navigate = useNavigate();
    const handleCreateEvent = () => {
        navigate('/tabs');
      };
    return (
        <div>
            <button class='buttonClose' onClick={handleCreateEvent}>
            <svg width="30" height="30" viewBox="0 0 58 58" fill="#FF735C" xmlns="http://www.w3.org/2000/svg">
            <rect x="17" y="24" width="2.49259" height="22.575" rx="1.2463" transform="rotate(-45 19.8073 22.5698)" fill="white" stroke="white" />
            <rect x="20" y="36" width="2.49259" height="22.575" rx="1.2463" transform="rotate(-135 21.5698 38.5328)" fill="white" stroke="white" />
            </svg>
            </button>
            <div class="container"> 
            <p>Создание события</p>
            <input class="input_mini" type='text' placeholder='Название события' id="event_name" required></input>
            <textarea class="input_maxi" type='text' placeholder='Описание событие' id="event_description"></textarea>
            <p >Теги</p>
            <TegsButton />
            <input class="input_mini" type='text' placeholder='Город' id="event_city" required></input>
            <input class="input_mini" type='number' min="0" max="100" placeholder='Количество участников' id="count_people" required></input>
            <p>Дата и время начала события</p>
            <input class="input_calendar" type='date' id="event_date"></input>
            <input class="input_mini" type='time' id="event_time"></input>
            <input class="input_mini" placeholder='Место встречи' id="event_place"></input>
            <p>Скрыть после</p>
            <input class="input_calendar" type='date' id="event_close_date"></input>
            <p>Видить могут только:</p>
            <div className="custom-radio">
            <label className="custom-label">
                <input type="radio" name="gender" value="male"/>
                <span className="radio-circle"></span>
                мужчины
            </label>
            <label className="custom-label">
                <input type="radio" name="gender" value="female"/>
                <span className="radio-circle"></span>
                женщины
            </label>
            <label className="custom-label">
                <input type="radio" name="gender" value="female"/>
                <span className="radio-circle"></span>
                все
            </label>
            </div>
            <p>Возраст:</p>
            <div className='containerAge'>
                <p>от</p>
                <input class="input_age" type="number" id="age1"></input>
                <p>до</p>
                <input class="input_age" type="number" id="age2"></input>
            </div>
            </div>
            <button class="buttonCreate" onClick={()=>get_data()}>
                <text class="textButton">создать</text>
                </button>
        </div>
    );
};

export default EventCreate;
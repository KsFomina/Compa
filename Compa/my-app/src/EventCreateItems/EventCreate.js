import React, { useState } from "react";
import "./EventCreate.css";
import { useNavigate } from "react-router-dom";
import { Get_data } from "./get_data.js";
import TegsButton from "./TegsButton.js";
import { useGetTagsQuery } from "../redux/Compa.WebAPI.js";
import { Select } from "antd";

const EventCreate = () => {
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate("/tabs");
  };
  const [tagId, setTagId] = useState();
  const { data: tags, isLoading, error } = useGetTagsQuery();
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  return (
    <div>
      <button class="buttonClose" onClick={handleCreateEvent}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 58 58"
          fill="#FF735C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="17"
            y="24"
            width="2.49259"
            height="22.575"
            rx="1.2463"
            transform="rotate(-45 19.8073 22.5698)"
            fill="white"
            stroke="white"
          />
          <rect
            x="20"
            y="36"
            width="2.49259"
            height="22.575"
            rx="1.2463"
            transform="rotate(-135 21.5698 38.5328)"
            fill="white"
            stroke="white"
          />
        </svg>
      </button>
      <div class="container">
        <p>Создание события</p>
        <input
          class="input_mini"
          type="text"
          placeholder="Название события"
          id="event_name"
          required
        ></input>
        <textarea
          class="input_maxi"
          type="text"
          placeholder="Описание событие"
          id="event_description"
        ></textarea>
        <p>Теги</p>
        <Select
          className="custom-select"
          style={{
            width: "130px",
            height: "40px",
          }}
          onChange={(tag) => {
            setTagId(tag);
          }}
          options={tags?.tags.map((tag) => ({
            value: tag.tagId,
            label: tag.tagName,
          }))}
        />
        <input
          class="input_mini"
          type="text"
          placeholder="Город"
          id="event_city"
          required
        ></input>
        <input
          class="input_mini"
          type="number"
          min="0"
          max="100"
          placeholder="Количество участников"
          id="count_people"
          required
        ></input>
        <p>Дата и время начала события</p>
        <input class="input_calendar" type="date" id="event_date"></input>
        <input class="input_mini" type="time" id="event_time"></input>
        <input
          class="input_mini"
          placeholder="Место встречи"
          id="event_place"
        ></input>
        <p>Скрыть после</p>
        <input class="input_calendar" type="date" id="event_close_date"></input>
        <p>Видить могут только:</p>
        <div class="custom-radio">
          <label class="custom-label">
            <input type="radio" name="gender" value="male" />
            <span class="radio-circle"></span>
            мужчины
          </label>
          <label class="custom-label">
            <input type="radio" name="gender" value="female" />
            <span class="radio-circle"></span>
            женщины
          </label>
          <label class="custom-label">
            <input type="radio" name="gender" value="female" id="gender" />
            <span class="radio-circle"></span>
            все
          </label>
        </div>
        <p>Возраст:</p>
        <div class="containerAge">
          <p>от</p>
          <input class="input_age" type="number" id="age1"></input>
          <p>до</p>
          <input class="input_age" type="number" id="age2"></input>
        </div>
      </div>
      <button class="buttonCreate" onClick={() => Get_data(tagId)}>
        <text class="textButton">создать</text>
      </button>
    </div>
  );
};

export default EventCreate;

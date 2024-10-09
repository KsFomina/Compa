import React from "react";
import EventCard from "../EventCard/EventCard";
import SearchBar from "../SearchBar/SearchBar";
import EventItem from "../../EventItem/EventItem";

const EventList = () => {
  const event = [
    {
      name: "Вечерняя пробежка",
      about: "Хочу пробежаться км 2-5.",
      time: "03.11.2024",
    },
    {
      name: "Поход в кино",
      about: "Пошли в кино!",
      time: "2.10.2024",
    },
    {
      name: "Учеба",
      about:
        "Хочу уделить некоторое время учебе.Хочу уделить некоторое время учебе.Хочу уделить некоторое время учебе.Хочу уделить некоторое время учебе.Хочу уделить некоторое время учебе.",
      time: "12.10.2024",
    },
    {
      name: "Видеоигры",
      about: "Ищу людей для проведения турниров.",
      time: "15.10.2024",
    },
    {
      name: "Учеба",
      about: "Хочу уделить некоторое время учебе.",
      time: "12.10.2024",
    },
    {
      name: "Видеоигры",
      about: "Ищу людей для проведения турниров.",
      time: "15.10.2024",
    },
  ];

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      {event.map((event, index) => (
        <EventCard
          key={index}
          name={event.name}
          about={event.about}
          time={event.time}
        />
      ))}
    </div>
  );
};

export default EventList;

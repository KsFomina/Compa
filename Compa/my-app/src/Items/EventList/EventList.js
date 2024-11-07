import React from "react";
import EventCard from "../EventCard/EventCard";
import SearchBar from "../SearchBar/SearchBar";
import EventItem from "../../EventItem/EventItem";
import TegsButton from "../../EventCreateItems/TegsButton";
import { useGetArrangementQuery } from "../../redux/Compa.WebAPI";

const EventList = () => {
  const { data: arr_data, isLoading, error } = useGetArrangementQuery();
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  return (
    <div>
      <div>
        <SearchBar/>
      </div>
      {arr_data?.arrangements.map((arr_data, index) => (
        <EventCard
          key={arr_data.arrangementId}
          name={arr_data.title}
          tag={arr_data.tag}
          about={arr_data.description}
          date={arr_data.date.slice(0, 10)}
          maxPeople ={arr_data.maxMembers}
          people={arr_data.membersIds}
          createrId= {arr_data.creatorId}
          city={arr_data.city}
          place={arr_data.place}
          time={arr_data.startTime}
        />
      ))}
    </div>
  );
};

export default EventList;

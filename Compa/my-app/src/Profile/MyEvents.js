import React from "react";
import EventCard from "../Items/EventCard/EventCard";
import { useGetArrangementIdQuery } from ".././redux/Compa.WebAPI";

const MyEvents=(EventId)=>{

    console.log(EventId);
    const { data: arr_data, isLoading, error } = useGetArrangementIdQuery(EventId.EventId);
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  console.log(arr_data);
  return(
    <EventCard
          key={arr_data?.arrangementId}
          idArr={arr_data?.arrangementId}
          name={arr_data?.title}
          tag={arr_data?.tag}
          about={arr_data?.description}
          date={arr_data?.date.slice(0, 10)}
          maxPeople ={arr_data?.maxMembers}
          people={arr_data?.membersIds}
          createrId= {arr_data?.creatorId}
          city={arr_data?.city}
          place={arr_data?.place}
          time={arr_data?.startTime}
        />
  );
}

export default MyEvents;
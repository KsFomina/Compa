import React, { useState } from "react";
import EventCard from "../EventCard/EventCard";
import {
  useGetArrangementQuery,
  useGetTagsQuery,
} from "../../redux/Compa.WebAPI";
import { Select } from "antd";
import "./EventList.css";

const EventList = () => {
  const { data: arr_data, isLoading, error } = useGetArrangementQuery();
  const { data: tags } = useGetTagsQuery();
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Поисковой запрос:", query);
    }
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
  };

  let filteredEvents = [];

  if (arr_data && Array.isArray(arr_data.arrangements)) {
    filteredEvents = arr_data.arrangements.filter((event) => {
      const eventTags = Array.isArray(event.tag) ? event.tag : [event.tag];
      const matchesTag = selectedTag ? eventTags.includes(selectedTag) : true;
      return matchesTag;
    });
  }

  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    return <div>Ошибка загрузки данных.</div>;
  }

  return (
    <div>
      <div className="search-style">
        <Select
          className="custom-select"
          placeholder="Теги"
          style={{
            width: "130px",
            height: "35px",
            marginRight: "5px",
          }}
          onChange={handleTagChange}
          options={tags?.tags.map((tag) => ({
            value: tag.tagId,
            label: tag.tagName,
          }))}
        />
        <input
          className="input"
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Поиск..."
        />
      </div>
      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            console.log("Событие для отображения:", event);
            return (
              <EventCard
                key={event.arrangementId}
                idArr={event.arrangementId}
                name={event.title}
                tag={event.tag}
                about={event.description}
                date={event.date.slice(0, 10)}
                maxPeople={event.maxMembers}
                people={event.membersIds || []}
                createrId={event.creatorId}
                city={event.city}
                place={event.place}
                time={event.startTime}
              />
            );
          })
        ) : (
          <div>Нет событий, соответствующих критериям поиска.</div>
        )}
      </div>
    </div>
  );
};

export default EventList;

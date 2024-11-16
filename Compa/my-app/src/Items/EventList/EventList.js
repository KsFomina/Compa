import React, { useState } from "react";
import EventCard from "../EventCard/EventCard";
import {
  useGetArrangementQuery,
  useGetTagsQuery,
} from "../../redux/Compa.WebAPI";
import { Select } from "antd";

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
    console.log("Выбранный тег:", value);
    setSelectedTag(value);
  };

  let filteredEvents = [];

  if (arr_data && Array.isArray(arr_data.arrangements)) {
    filteredEvents = arr_data.arrangements.filter((event) => {
      const eventTags = Array.isArray(event.tag) ? event.tag : [event.tag];
      const matchesTag = selectedTag ? eventTags.includes(selectedTag) : true;
      return matchesTag;
    });
    console.log("События тегам:", filteredEvents);
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка загрузки данных.</div>;
  }

  return (
    <div>
      <Select
        className="button_style1"
        style={{
          width: "130px",
          height: "40px",
        }}
        onChange={handleTagChange}
        options={tags?.tags.map((tag) => ({
          value: tag.tagId,
          label: tag.tagName,
        }))}
      />
      <div className="search-style">
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

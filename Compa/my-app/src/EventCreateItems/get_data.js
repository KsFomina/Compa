import { usePostArrangementMutation } from "../redux/Compa.WebAPI.js";
import React, { useState, useEffect } from "react";

const Get_data = async () => {
  const [postArrangement] = usePostArrangementMutation();
  const event_name = document.getElementById("event_name");
  const event_description = document.getElementById("event_description");
  const event_city = document.getElementById("event_city");
  const count_people = document.getElementById("count_people");

  if (
    event_name.value &&
    event_description.value &&
    event_city.value &&
    count_people.value
  ) {
    await postArrangement({
      title: event_name,
      description: event_description,
      tag: "00000000-0000-0000-0000-000000000000",
      city: event_city,
      maxMembers: document.getElementById("count_people"),
      date: document.getElementById("event_date"),
      startTime: document.getElementById("event_time"),
      endTime: document.getElementById("event_close_date"),
      gender: document.getElementById("gender"),
      minAge: document.getElementById("age1"),
      maxAge: document.getElementById("age2"),
      creatorId: "00000000-0000-0000-0000-000000000000",
      place: document.getElementById("event_place"),
    });
  }
};

export default Get_data;

import { usePostArrangementMutation } from "../redux/Compa.WebAPI.js";

export function Get_data(tagId) {
  const [postArrangement, { error, isLoading }] = usePostArrangementMutation();
  if (isLoading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  const event_name = document.getElementById("event_name");
  const event_description = document.getElementById("event_description");
  const event_city = document.getElementById("event_city");
  const count_people = document.getElementById("count_people");

  if (
    event_name.value &&
    event_description.value &&
    event_city.value &&
    count_people.value &&
    tagId
  ) {
    postArrangement({
      title: event_name,
      description: event_description,
      tag: tagId,
      event_city,
    });
  }
}

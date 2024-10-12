import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log = ("Поисковой запрос", query);
    }
  };

  return (
    <div>
      <button className="button_style1">теги</button>
      <div className="search-style">
        <div onSubmit={handleKeyPress} className="search-form">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

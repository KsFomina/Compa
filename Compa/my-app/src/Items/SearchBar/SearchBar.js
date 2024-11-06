import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // предотвращаем отправку формы, если эта логика применима
      console.log("Поисковой запрос:", query); // Вызываем вашу функцию поиска
    }
  };

  return (
    <div>
      <button className="button_style1">теги</button>
      <div className="search-style">
        <div className="search-form">
          <input
            className="input"
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

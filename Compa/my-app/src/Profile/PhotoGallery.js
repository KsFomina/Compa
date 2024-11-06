// src/PhotoGallery.js
import React, { useState, useRef } from "react";
import "./PhotoGallery.css"; // Импортируйте CSS файл

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Программно открываем диалог выбора файла
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} className="imgUser-style" />
        ))}
      </div>
      <div className="upload-button" onClick={handleButtonClick}>
        <span>+</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;

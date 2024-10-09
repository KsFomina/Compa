import React, { useEffect, useState } from "react";
import EventList from "../EventList/EventList";
import "./Tabs.css";
import { useNavigate } from "react-router-dom";
import AutorizationPage from "../../Authorization/AutorizationPage.js";

const tabs = ["События", "Профиль", "Чаты"];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate("/event-create");
  };
  const [cl, setCl] = useState();

  useEffect(() => {
    fetch(
      "https://localhost:7208/api/Arrangement/eeaf8464-aa93-41de-8f19-c7d5e69e4936"
    ).then((response) => response.json().then((data) => setCl(data)));
  }, []);
  // console.log(cl?.arrangements[0]?.title);
  console.log(cl);
  return (
    <div className="tab-style">
      <div className="tab-menu">
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              textDecoration: activeTab === index ? "underline" : "none",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 2 && <AutorizationPage />}
        {activeTab === 1}
        {activeTab === 0 && <EventList />}
      </div>
      <div className="fixed-button-container">
        <button className="fixed-button" onClick={handleCreateEvent}>
          <svg width="100">
            <rect />
            <circle cx="49.5" cy="37.5" r="20.5" fill="white" />
            <rect
              x="47.5413"
              y="25.5"
              width="2.49259"
              height="22.575"
              rx="1.2463"
              fill="#FF735C"
              stroke="#FF735C"
            />
            <rect
              x="36.5"
              y="39.0338"
              width="2.49259"
              height="22.575"
              rx="1.2463"
              transform="rotate(-90 36.5 38.0338)"
              fill="#FF735C"
              stroke="#FF735C"
            />
          </svg>
        </button>
      </div>
      {/* <p>{cl?.arrangements[0]?.title}</p> */}
    </div>
  );
};

export default Tabs;

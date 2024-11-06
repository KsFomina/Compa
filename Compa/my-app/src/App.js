import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Tabs from "./Items/Tabs/Tabs";
import EventCreate from "./EventCreateItems/EventCreate";
import AutorizationPage from "./Authorization/AutorizationPage";
import AboutPage from "./AboutPage/AboutPage.js";
import Profile from "./Profile/Profile.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AutorizationPage />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/eventCreate" element={<EventCreate />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

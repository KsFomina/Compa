import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Tabs from "./Items/Tabs/Tabs";
import EventCreate from "./EventCreateItems/EventCreate";
import AutorizationPage from "./Authorization/AutorizationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AutorizationPage />} />
          <Route path="/Tabs" element={<Tabs />} />
          <Route path="/eventCreate" element={<EventCreate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

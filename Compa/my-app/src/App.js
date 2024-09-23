  import logo from './logo.svg';
  import './App.css';
  import EventList from './Items/EventList';
  import Tabs from './Items/Tabs';
  import EventCreate from './EventCreateItems/EventCreate';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  function App() {
    return (
      <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Tabs/>} />
          <Route path="/event-create" element={<EventCreate/>} />
        </Routes>
      </Router>
      </div>
    );
  }

  export default App;

import React, {useState} from 'react';
import EventList from './EventList';
import './Tabs.css';
import { useNavigate } from 'react-router-dom';

const tabs =['События','Профиль','Чаты']

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    const handleCreateEvent = () => {
        navigate('/event-create');
      };
    return(
        <div className='tab-style'>
            <div className='tab-menu'>
                {tabs.map((tab, index) => (
                    <div 
                    key = {index}
                    style={{
                        backgroundColor: activeTab === index ? '#f7f0ff' : 'white',
                        textDecoration: activeTab === index ? 'underline' : 'none',
                        cursor: 'pointer',
                        padding: '10px',
                    }}
                    onClick = {() => setActiveTab(index)}
                    >
                        {tab}
                </div>
                ))}
            </div>
            <div className='tab-content'>
                {activeTab === 2 }
                {activeTab === 1 }
                {activeTab === 0 && <EventList/>}
            </div>
            <button onClick={handleCreateEvent}>Создать событие</button>
        </div>
    );
};




export default Tabs;
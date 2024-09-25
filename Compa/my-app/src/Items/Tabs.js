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
            <div className='fixed-button-container' >
            <button className='fixed-button' onClick={handleCreateEvent}>
             <svg width="100">
                <rect/>
                <circle cx="49.5" cy="37.5" r="20.5" fill="white" />
                <rect x="47.5413" y="25.5" width="2.49259" height="22.575" rx="1.2463" fill="#FF735C" stroke="#FF735C" />
                <rect x="36.5" y="39.0338" width="2.49259" height="22.575" rx="1.2463" transform="rotate(-90 36.5 38.0338)" fill="#FF735C" stroke="#FF735C" />
             </svg>            
            </button>
            </div>
        </div>
    );
};




export default Tabs;
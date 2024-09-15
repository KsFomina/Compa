import React, {useState} from 'react';
import EventList from './EventList';
import './Tabs.css';

const tabs =['Профиль','Увлечения','События']

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className='tab-style'>
            <div className='tab-menu'>
                {tabs.map((tab, index) => (
                    <div 
                    key = {index}
                    style={{
                        backgroundColor: activeTab === index ? '#f7f0ff' : 'white',
                        cursor: 'pointer', // добавлено для указания курсора на кнопках
                    }}
                    onClick = {() => setActiveTab(index)}
                    >
                        {tab}
                </div>
                ))}
            </div>
            <div className='tab-content'>
                {activeTab === 0 }
                {activeTab === 1 }
                {activeTab === 2 && <EventList/>}
            </div>
        </div>
    );
};




export default Tabs;
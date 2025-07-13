import React from 'react';
import { Link } from 'react-router-dom';
import './TabsBar.css';

function TabsBar({ activeTab, setActiveTab }) {
    console.log('activeTab in TabsBar:', activeTab);
    return (
        <div>
            <div className="tabs-bar">
                <button className = 'tabs-link' onClick={() => setActiveTab('home')}>Home</button>
                <button className = 'tabs-link' onClick={() => setActiveTab('about')}>About</button>
                <button className = 'tabs-link' onClick={() => setActiveTab('experience')}>Experience</button>
                <button className = 'tabs-link' onClick={() => setActiveTab('projects')}>Projects</button>
                <div className={`active-tab ${activeTab}`} />
            </div>
        </div>
    );
};

export default TabsBar;

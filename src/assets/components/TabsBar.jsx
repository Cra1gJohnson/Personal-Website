import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function TabsBar({ activeTab, setActiveTab }) {
    console.log('activeTab in TabsBar:', activeTab);
    return (
        <div className="tabsbar">
            <button className={`tab ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}>About</button>
            <button className={`tab ${activeTab === 'experience' ? 'active' : ''}`} 
                onClick={() => setActiveTab('experience')}>Experience</button>
            <button className={`tab ${activeTab === 'projects' ? 'active' : ''}`} 
                onClick={() => setActiveTab('projects')}>Projects</button>
            <button className= {`tab ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => setActiveTab('blog')}>Blog</button>
        </div>
    );
};

export default TabsBar;

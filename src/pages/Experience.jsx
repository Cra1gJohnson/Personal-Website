import React, { useState } from 'react';
import './Experience.css';
import TabsBar from '../assets/components/TabsBar.jsx';


export default function Experience() {
    return (
        <div className="background">
            <div className="main-body">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TabsBar activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                <h1>Project Experience</h1>
            </div>
        </div>
    )
}
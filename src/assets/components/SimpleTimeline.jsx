import React from 'react';

import './SimpleTimeline.css';

const SimpleTimeline = () => {
  const events = [
    { date: "2024-05", title: "Graduated from UMBC", description: "Project initiation and requirements gathering. Setting up the foundation for the entire project workflow." },
    { date: "2024-02", title: "Design", description: "UI/UX design phase including wireframes, mockups, and user experience optimization." },
    { date: "2024-03", title: "Development", description: "Core development phase where we build the main features and functionality of the application." },
    { date: "2024-04", title: "Testing", description: "Comprehensive QA testing including unit tests, integration tests, and user acceptance testing." },
    { date: "2024-05", title: "Launch", description: "Final deployment and product launch with monitoring and post-launch support." }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Experience Timeline</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-circle">
                <div className="timeline-circle-inner"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-date">{event.date}</div>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SimpleTimeline;
import React from 'react';

// CSS styles with improved spacing
const timelineStyles = `
  .timeline-container {
    max-width: 42rem;
    margin: 0 auto;
    padding: 3rem 2rem;
    background-color: #1C1F26;
    min-height: 100vh;
  }
  
  .timeline-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #E4E6EB;
  }
  
  .timeline-wrapper {
    position: relative;
    padding-left: 2rem;
  }
  
  .timeline-line {
    position: absolute;
    left: 1%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #3e4552;
  }
  
  .timeline-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem; /* Increased from 2rem to 3rem */
    min-height: 120px; /* Ensures minimum height for each item */
  }
  
  .timeline-item:last-child {
    margin-bottom: 0;
  }
  
  .timeline-circle {
    position: absolute;
    left: -5.6%; /* Positions circle on the line */
    top: 0.5rem;
    z-index: 10;
    width: 1rem;
    height: 1rem;
    background-color: #2A2E37;
    border-radius: 50%;
    border: 4px solid #3e4552;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .timeline-circle-inner {
    width: 0.25rem;
    height: 0.25rem;
    background-color: #E4E6EB;
    border-radius: 50%;
  }
  
  .timeline-content {
    background-color: #1C1F26;
    padding: 1.5rem; /* Increased padding */
    margin-left: 2%;
    text-align: left;
    border-radius: 0.75rem; /* Slightly more rounded */
    flex: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #3e4552;
    transition: box-shadow 0.2s ease;
  }
  
  .timeline-content:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-date {
    font-size: 0.75rem;
    color: #E4E6EB;
    margin-bottom: 0.75rem; /* Increased spacing */
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .timeline-event-title {
    font-weight: 600;
    color: #E4E6EB;
    margin-bottom: 0.75rem; /* Increased spacing */
    font-size: 1.125rem; /* Slightly larger */
    line-height: 1.4;
  }
  
  .timeline-description {
    font-size: 0.875rem;
    color: #E4E6EB;
    line-height: 1.5; /* Better line height for readability */
    margin: 0;
  }
`;

const SimpleTimeline = () => {
  const events = [
    { date: "2024-01", title: "Planning", description: "Project initiation and requirements gathering. Setting up the foundation for the entire project workflow." },
    { date: "2024-02", title: "Design", description: "UI/UX design phase including wireframes, mockups, and user experience optimization." },
    { date: "2024-03", title: "Development", description: "Core development phase where we build the main features and functionality of the application." },
    { date: "2024-04", title: "Testing", description: "Comprehensive QA testing including unit tests, integration tests, and user acceptance testing." },
    { date: "2024-05", title: "Launch", description: "Final deployment and product launch with monitoring and post-launch support." }
  ];

  return (
    <>
      <style>{timelineStyles}</style>
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
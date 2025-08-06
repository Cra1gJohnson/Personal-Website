import React from 'react';

import '../../index.css';

import ShinyText from './TxtComp/ShinyText.jsx';

const ProjectTimeline = () => {
  const events = [
    { date: "2025 August",
      title: "Portfolio and Blog Website",
      description: "Website built with partner using Github and React.js. Hosted on a Raspberry pi webserver",
      
    },
    { date: "2025 May",
      title: "Recipe Website",
      description: "Multi-Page website built with 3 person team using Github, Express.js, and JavaScript. Utilizing MonogDb as a backend database and Recipe API",
      
    },
    { date: "2025 March",
      title: "Pacman Git Project",
      description: "Completed the implementation of a Pacman game in python with a 4 person team. Used Git to remove public keys from file history. Worked with Bash scripts to moniter computer performace while the game is running",
      
    },
    { date: "2024 December",
      title: "K-d Tree data structure",
      description: "Implemented a K-d Data structure with various features like insert, search, and n-nearest neighbors",
      
    }
  ];

  return (
    <>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-circle">
              <div className="timeline-circle-inner"></div>
            </div>

            <div className="timeline-content">
              <div className="timeline-date">
                {event.date}
              </div>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProjectTimeline;
import React from 'react';

import '../../index.css';

import ShinyText from './TxtComp/ShinyText.jsx';

const SimpleTimeline = () => {
  const events = [
    { date: "2024 May",
      title: "Graduated from UMBC",
      description: "Graduated with a Bachelors degree in Computer Science. Cum Laude with a GPA of 3.553." 
    },
    { date: "2024 June-August",
      title: "Software Engineer Intern at Northrop Grumman",
      description: "Worked with the SEWIP Program. Worked specifically on DevSecOps. Working with tools like Jenkins. It was challenging since I had never worked with CI/CD tools before. Especially on such a large program. While a daunting task I updgraded the build scripts to work on RHEL8 machines. While also improving efficiency. Reducing build time from 2 hours to 40 minutes."
    },
    { date: "2023 June-August",
      title: "Software Engineer Intern at Northrop Grumman",
      description: "Developed C++ code for a Electronic Warfare System. Wrote scripts in Python, using Regex, to find applicable test data within certain value thresholds. Challenges I overcame during the internship were, learning Git, putting AGILE development process into practice, navigating a in person work environemnt, and having confidence in my solutions."
    },
    { date: "2022 June-August",
      title: "YMCA Pool Manager",
      description: "Being a Pool Manager taugh me lots of soft skills. Having responsibility, communication with leadership, teamwork, and leadership. While at the time I was upset about not getting a internship after my Freshman year, this job was very important to my professional development. Understanding how to professionally deal with patrons, complaints, and communicate."
    }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2>
          <ShinyText
          text="Experience"
          disabled={false}
          speed={3}
          className="timeline-title"
          />
        </h2>
        
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
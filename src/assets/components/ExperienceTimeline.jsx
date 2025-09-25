import React from 'react';

import '../../App.css';

import HCDrug from '/HCDrugFreeLOGO.png';
import FranklinsLogo from '/franklins-brewery.jpg';
import UMDLogo from '/university-of-maryland.svg';
import Madrid from '/Madrid.png';
import USIBA  from '/USIBA.jpeg';
import RacePace from '/Race_Pace bicycles.png'
import ShinyText from './TxtComp/ShinyText.jsx';

const ExperienceTimeline = () => {
  const events = [
    { date: "2025 August",
      title: "Graduated from UMD",
      description: "I Graduated with a Bachelors degree in Computer Science",
      img:UMDLogo
    },
    { date: "2025 March",
      title: "USIBA Boxing Nationals Competition",
      description: "I Competed in the Beginner 160lbs division of the 2025 USIBA Nationals Tournament in Macon, Georgia. Weighed in on multiple days and won my division. Collaborated with and supported the rest of my team, UMD Club Boxing",
      img: USIBA
    },

    { date: "2024 January",
      title: "Studied Abroad in Madrid",
      description: "I Lived and studied in Spain for 6 months. I thoroughly enjoyed the process of learning a new culture, meeting new friends, and getting to see many of new places. One of the most intereting parts was experiencing a foreign university. I also gained my B1 certificate in Spanish",
      img: Madrid
    },
    { date: "2023 September",
      title: "Server at Franklins Brewery",
      description: "I became a Server at Franklins during my semster at college. It taught me valuable lessons in multitasking, communication, and how to handle a stressful job",
      img: FranklinsLogo
    },
    { date: "2020 March",
      title: "Teaching Consultant for HCDrugFree",
      description: "Was given the oportunity to help teach a course on life skills to local middle schoolers. This was both in person and online.",
      img: HCDrug
    },
    { date: "2019 March",
      title: "Mechanic at Race Pace Bicycles",
      description: "I got this job while in high school and learned how to work on all different types of bicycles. ",
      img: RacePace
    },
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
                {event.img && (
                  <img
                    src={event.img}
                    className={
                      event.img === RacePace || HCDrug ?
                      "timeline-logo-rectangle" : "timeline-logo-square"

                    }
                  />
                )}
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

export default ExperienceTimeline;
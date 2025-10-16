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
    { date: "August 2025",
      title: "Graduated from UMD",
      description: "Graduating from the University of Maryland was both a challenge and a privilege. My coursework demanded focus, patience, and critical thinking, from taking notes in early lectures to scrutinizing over syntax whilst debugging at 2am.  My professors offered practiced guidance and cultivated curriculum to reveal a depth of technology that I had never seen before. My peers inspired me to work harder and collaborate more. They showed me a myriad of personality and a humility that I strive to emulate. \n\n My Computer Science degree taught me how to approach difficult problems systematically, from debugging stubborn code to designing complex data structures. Most importantly it taught me how to learn. The mindset that I developed now guides how I approach every new project: with curiosity, persistence, and a drive to create something substantial that works.",
      img:UMDLogo
    },
    { date: "March 2025",
      title: "USIBA Boxing Nationals Competition",
      description: "I was first introduced to boxing in high school by my brother. What began as simple workouts in our garage, soon developed into coordinated pad work and shadowboxing. I loved the intense focus that the sport required and always found a boxing workout to be cathartic in times of stress. While I was studying abroad in Madrid, I was blessed to find a local gym that welcomed me. I joined a friendly cohort of regulars, who had little in common except our love of boxing and a grueling workout. It was there that my desire to compete was sparked, by coaches that motivated me and friends that pushed me to be better. \n\nWhen I returned to Maryland I joined UMD’s boxing club competitive team and threw myself into training with new purpose. The journey demanded that I examine my priorities and harden my discipline. Morning runs, long conditioning sessions, and countless rounds in the ring became part of my routine. With the support of my teammates and coaches I overcame setbacks and developed my skills. In March 2025, my hard work culminated in victory as I won the 160lb Beginner Division at the USIBA National Tournament.  The title was more than a belt, it was a testament to the power of consistency and discipline and a reminder that hard things are often worth doing.",
      img: USIBA
    },

    { date: "January 2024",
      title: "Study Abroad in Madrid",
      description: "Living in Madrid pushed me far outside my comfort zone. Every day required an open mind, a new language, a new culture, and a new city in a completely different part of the world. I had to build a new routine and form a whole new circle of friends. With those challenges came the reward of a fresh perspective. I had space to think about who I wanted to be, free from the familiar patterns of home. That time alone taught me independence and self-direction. I admired the people of Madrid, hardworking and ambitions, yet keen to slow down and have a long dinner with friends.",
      img: Madrid
    },
    { date: "September 2023",
      title: "Server at Franklins Brewery",
      description: "Franklin’s brewery was the job that helped support me through college. The hours fit around my classes and provided a steady income, but it was my first time working in a restaurant, and the learning curve was steep. I had to adapt quickly to the rush of a packed dining room, balancing multiple tables while keeping a calm and friendly air. Long nights taught me to stay composed under pressure and communicated clearly, especially through difficulties or when a request could not be accommodated. Over time, I came to appreciate the teamwork, empathy, and focus it took to make every guest’s experience a good one.",
      img: FranklinsLogo
    },
    { date: "March 2020",
      title: "Teaching Consultant for HCDrugFree",
      description: "I was introduced to HC DrugFree through teen advisory meetings that I attended. At first,  I was just there to share my opinions on new advertising campaigns and events. During one of those meetings, Joan Scornaienchi invited me to join a new teaching program for local youth. Teaching younger students about valuable life skills that would prepare them for high school. I quickly found that I liked being a mentor, guiding younger students through discussion and activities. Even during the pandemic, when classes shifted online,  I stayed involved and worked on new ways to keep the kids entertained.", 
      img: HCDrug
    },
    { date: "March 2019",
      title: "Mechanic at Race Pace Bicycles",
      description: "I started working at a bike shop in high school because I wanted to be self-sufficient, to earn my own way and learn something hands-on. I quickly fell in love with the process of gaining expertise: understanding how things worked, fixing what was broken, and constantly asking questions out of curiosity. The job taught me how to communicate with customers, handle stressful situations with patience and professionalism, and stay focused for long hours on a tangible task in front of me.",
      img: RacePace
    },
  ];
  /*const paragraphs = events.description.split("\n\n");*/

  return (

    <div className="timeline-wrapper">
      <div className="timeline-line"></div>

      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-circle">
            <div className="timeline-circle-inner"></div>
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              {event.date}
              <h3 className="timeline-event-title">{event.title}</h3>  
              <div className="timeline-logo"> 
                <img
                src={event.img}
                
                />
              </div>
            </div>
            

            <div className="timeline-description" style={{whiteSpace: "pre-line"}}>{event.description}</div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default ExperienceTimeline;
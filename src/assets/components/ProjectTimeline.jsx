import React from 'react';

import '../../App.css';
import ShinyText from './TxtComp/ShinyText.jsx';

const ProjectTimeline = () => {
  const events = [
    { date: "August 2025",
      title: "Portfolio and Blog Website",
      description: "A portfolio website and blog built using React and Vite, deployed using Node.js, nginx, cloudflare, and a DDNS Bash script.\n- Developed a personal website and blog using React and Vite, collaborating with a partner via Git and Github for version control and workflow management \n- Implemented mobile-first design using react-responsive and CSS to optimize the size for smartphones\n- Hosted the website on a raspberry pi server, which executes a DDNS Bash script every 5 minutes to connect cpjserve.com via certbot",
      
    },
    { date: "July 2025",
      title: "ML Technique Implementation",
      description: "A PCA and NN techniques implemented in python in the anaconda command line environment \n- Collaborated with a partner to implement core machine learning techniques, including Principal Component Analysis (PCA) in Python using NumPy, SciPy, and Matplotlib \n- Developed and trained a neural network, using ReLU activation and squared loss for performance comparison and evaluating SGD and Adam optimizers over multiple epochs to achieve 98% accuracy",
      
    },
    { date: "May 2025",
      title: "Recipe Website",
      description: "A multi-Page website developed with 2 peers using Github, Express.js, and JavaScript. We Utilizing MonogDB as a backend database and Rest API to retrieve recipes.\n- Developed a full-stack recipe website using Express.js, MongoDB, and JavaScript, implementing RESTful API routes to manage and retrieve recipe data dynamically\n- Collaborated with a team of three using GitHub for version control, handling feature branches, code reviews, and merge workflows to maintain clean, consistent project structure",
      
    },
    { date: "December 2024",
      title: "K-d Tree data structure",
      description: "A K-d data structure built in python and tested with pytests. \n- implemented a K-d tree data structure with methods for insertion, deletion, and nearest neighbor search, ensuring the tree always remain balanced \n- Validated correctness and performance through 40+ automated tests, including stress tests with up to 10,000 randomized inputs ",
      
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
              <div className="timeline-description" style={{whiteSpace: "pre-line"}}>{event.description}</div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProjectTimeline;
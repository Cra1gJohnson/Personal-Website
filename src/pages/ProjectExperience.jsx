import InfiniteScroll from '../assets/components/TxtComp/InfScroll.jsx';
import FlowingMenu from "../assets/components/TxtComp/FlowingMenu.jsx";

import { Link } from 'react-router-dom';

import './ProjectExperience.css';

const projects = [
  { content: <Link to="/"><h3>Portfolio Website</h3></Link>, link: '/resume' },
  { content: <Link to="/projects"><h3>VALORANT Discord Bot</h3></Link>}
]

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

const ProjectExperience = () => {
  return (
    <div>
      {/* Add margin-top to position InfiniteScroll lower */}
      <div style={{ marginTop: '60px' }}>
        <InfiniteScroll
          items={projects}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}

export default ProjectExperience;

// Old code for ProjectExperience component
        // <h1>Project Experience</h1>
        // <h2>Portfolio Website</h2>
        // <p>Developed this personal portfolio website using React and CSS to showcase my resume, projects, and skills.</p>
        // <h2>
        //     <a className="nav-link" href="https://github.com/cwalke6/valorantBot">VALORANT Discord Bot</a>
        // </h2>
        // <p>A discord bot for the Tactical FPS game "VALORANT". It retrieves user data through commands and returns summaries of recent matches.</p>
        // <p>Images below show a match history summary, a specific match summary, and a players rank.</p>
        // <img src="https://camo.githubusercontent.com/c0ab01a0f82172edfe4f6438c56322fa3f9a750a6beb32c4df3793acd05fc59c/68747470733a2f2f692e696d6775722e636f6d2f6a31704c71374e5f642e776562703f6d617877696474683d37363026666964656c6974793d6772616e64" alt="VALORANT Discord Bot Image 1" style={{ width: '760px', height: '499px' }} />
        // <img src="https://camo.githubusercontent.com/3e8baf3bc55638d71b7f7c4391890e3eeee2397890829f0f954bbdcb575e6763/68747470733a2f2f692e696d6775722e636f6d2f45374a426f31715f642e776562703f6d617877696474683d37363026666964656c6974793d6772616e64" alt="VALORANT Discord Bot Image 2" style={{ width: '760px', height: '499px' }} />
        // <br />
        // <img src="https://camo.githubusercontent.com/590bfd87ee5a23bb47d22970646110e1c3e8b425c58005476f92864f02e148c8/68747470733a2f2f692e696d6775722e636f6d2f597a6f333643575f642e776562703f6d617877696474683d37363026666964656c6974793d6772616e64" alt="VALORANT Discord Bot Image 3" style={{ width: '760px', height: '308px' }} />
        // <br />
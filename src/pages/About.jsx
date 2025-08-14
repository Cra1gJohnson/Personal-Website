import { Link } from 'react-router-dom';

import NavBar from '../assets/components/NavBar.jsx';
import PicInfo from '../assets/components/PicInfo.jsx';
import './About.css';
const About = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <h1>Welcome to the about page</h1>
            <h2> Below are things that I am interested in</h2>
            <div className="PI">
            <PicInfo pic="/egoTrip.png" info="New Album by Anthony James and John Michel.
            It really spoke to my soul and I love the production.
            Also the guitar solos" />
            </div>
        </div>
    );
};

export default About;
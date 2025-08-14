import React from "react";

import SocialBar from './SocialBar.jsx';
import ShinyText from './TxtComp/ShinyText.jsx';

import './About.css'
function About() {

    return (
        <div id="home">
            <h1>
                <ShinyText
                text="Craig Johnson and Christian Walker"
                disabled={false}
                speed={3}
                className=""
                style={{ fontSize: 'inherit', fontWeight: 'inherit'}}
                />
            </h1>

            <h3>Developer |  Programmer | Software Engineer | Athlete | Gamer | Musician</h3>
            {/* <div id="containerOne"><SocialBar /></div> */}
        </div>
    );
};

export default About;
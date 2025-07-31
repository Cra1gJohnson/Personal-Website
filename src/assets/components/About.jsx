import React from "react";

import Media from "./Media";
import SocialBar from './SocialBar.jsx';
import ShinyText from './TxtComp/ShinyText.jsx';
function About() {
    return (
        <div id="Home">
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
            <div id="containerOne"><SocialBar /></div>
        </div>
    );
};

export default About;
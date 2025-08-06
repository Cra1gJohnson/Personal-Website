import React from "react";
import Media from "./Media";
import ProjectTimeline from './ProjectTimeline.jsx';
import ShinyText from './TxtComp/ShinyText.jsx';
function Projects() {
    return (
        <div className="timeline-container">
            <h2>
                <ShinyText
                    text="Projects"
                    disabled={false}
                    speed={3}
                    className="timeline-title"
                />
            </h2>
            <ProjectTimeline />
        </div>
    );
};

export default Projects;
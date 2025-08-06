import React from "react";
import ShinyText from './TxtComp/ShinyText.jsx';
import ExperienceTimeline from './ExperienceTimeline.jsx';

function Experience() {
    return (
        <div className="timeline-container">
            <h2>
                <ShinyText
                    text="Experience"
                    disabled={false}
                    speed={3}
                    className="timeline-title"
                />
            </h2>
            <ExperienceTimeline />
        </div>
    );
};

export default Experience;
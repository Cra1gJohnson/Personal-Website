import React, {useState} from 'react';
import './ExperiencePage.css';
import TabsBar from '../assets/components/TabsBar.jsx';
import Home from '../assets/components/Home.jsx';
import About from '../assets/components/About.jsx';
import Experience from '../assets/components/Experience.jsx';
import Projects from '../assets/components/Projects.jsx';

// I am going about this all wrong.
// Tabs needs to be a seperate component that is imported into the Experience page.
// That way it can be used in other pages and have the same format.
/* export default function Experience() {
    return (
        <div className="background">
            <div className="main-body">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TabsBar />
                </div>
                <h1>Project Experience</h1>
            </div>
        </div>
    )
} */

export default function ExperiencePage() {
    
        const [activeTab, setActiveTab] = useState('Home');

        let TabContent;
        switch (activeTab){
            case 'home':
                TabContent = <Home />;
                break;
            case 'about':
                TabContent = <About />;
                break;
            case 'experience':
                TabContent = <Experience />;
                break;
            case 'projects':
                TabContent = <Projects />;
                break;
            default:
                TabContent = <Home />;
            
            
        }
        return(
            <div className="main-body">
                <div>
                    <span> 
                        <TabsBar setActiveTab={setActiveTab}/>
                    </span>
                </div>
                <div style={{padding: '2rem'}}>
                    {TabContent}
                </div>
            </div>
        )
        
    
}
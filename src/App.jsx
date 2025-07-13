import React, { useState } from 'react';
import Header from './assets/components/Header.jsx';
import TabsBar from './assets/components/TabsBar.jsx';
import SocialBar from './assets/components/SocialBar.jsx';

import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';
import Experience from './assets/components/Experience.jsx';
import Projects from './assets/components/Projects.jsx';

// Text Components Import
import ShinyText from './assets/components/TxtComp/ShinyText.jsx';

import './App.css';

/*
react components start  with an uppercase
and elements start with a lowercase
*/

function App() {
  const [activeTab, setActiveTab] = useState('home');

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

  return (
    <div className="main-body">
      <div>
          <span> 
              <TabsBar activeTab={activeTab} setActiveTab={setActiveTab}/>
          </span>
      </div>
      <div style={{padding: '2rem'}}>
          {TabContent}
      </div>
  </div>
  );
};

export default App;

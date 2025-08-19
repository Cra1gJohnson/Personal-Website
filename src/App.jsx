import React, { useState } from 'react';

import TabsBar from './assets/components/TabsBar.jsx';
import SideBar from './assets/components/SideBar.jsx';

import About from './assets/components/About.jsx';
import Experience from './assets/components/Experience.jsx';
import Projects from './assets/components/Projects.jsx';
import Blog from './assets/components/Blog.jsx';


import './App.css';
/*
react components start  with an uppercase
and elements start with a lowercase
*/

function App() {
  const [activeTab, setActiveTab] = useState('about');
  
  let TabContent;
  switch (activeTab){
    case 'about':
      TabContent = <About />;
      break;
    case 'experience':
      TabContent = <Experience />;
      break;
    case 'projects':
      TabContent = <Projects />;
      break;
    case 'blog':
      TabContent = <Blog />;
      break;
    default:
      TabContent = <About />;
  }

  return (
    <main className="app">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <TabsBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {TabContent}
      </div>
    </main>
  );
};

export default App;

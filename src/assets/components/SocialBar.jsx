import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '/github-mark-white.png';
import instagramLogo from '/Instagram_Glyph_White.png';
import linkedinLogo from '/InBug-White-no.png';
import gmailLogo from '/Gmail_Logo_White.svg';


import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social">
        <a href="https://github.com/Cra1gJohnson" target="_blank">
            <img src={githubLogo} className="logo" />
        </a>
        <a href="https://www.instagram.com/cra1gjohnson/?hl=en" target="_blank">
            <img src={instagramLogo} className="logo" />
        </a>
        <a href="https://www.linkedin.com/in/craig-p-johnson/" target="_blank">
            <img src={linkedinLogo} className="logo" />
        </a>
        <a href="mailto:craig.johnson.21045@gmail.com" target="_blank">
            <img src={gmailLogo} className="logo" />
        </a>
    </div>
  );
};

export default SocialBar;

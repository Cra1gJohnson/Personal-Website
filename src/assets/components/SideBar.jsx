
import './SideBar.css';

import SocialBar from './SocialBar.jsx';

import ShinyText from './TxtComp/ShinyText.jsx';

function SideBar() {

    return (
        <div className="sidebar-main">
            <h2>
                <ShinyText
                text="Christian Walker"
                disabled={false}
                speed={3}
                className=""
                style={{ fontSize: 'inherit', fontWeight: 'inherit'}}
                />
            </h2>
            <div className="avatar">
                <span>AVATAR GOES HERE</span>
            </div>
            <div className="social-links">
                <ul>
                    <div className="list-image"></div>
                    <li className="list-header">Instagram</li>
                    <span className="list-item">c.wa1ker</span>
                    <div className="list-image"></div>
                    <li className="list-header">Email</li>
                    <span className="list-item">cwalker6@umbc.edu</span>
                    <div className="list-image"></div>
                    <li className="list-header">GitHub</li>
                    <span className="list-item">cwalke6</span>
                    <div className="list-image"></div>
                    <li className="list-header">LinkedIn</li>
                    <span className="list-item">Christian--Walker</span>
                </ul>
            </div>
            <SocialBar/>
        </div>
    );
};

export default SideBar;
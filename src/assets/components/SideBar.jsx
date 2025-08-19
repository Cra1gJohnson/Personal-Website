import './SideBar.css';
import SocialBar from './SocialBar.jsx';
import ShinyText from './TxtComp/ShinyText.jsx';
import ContactList from './ContactList.jsx';
import { useMediaQuery } from 'react-responsive';

function SideBar() {
    const isMobile = useMediaQuery({maxWidth: 900});
    return (
        <>
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

            {isMobile ? <SocialBar/> : <ContactList/>}

        </>
    );
};

export default SideBar;
import './SideBar.css';
import SocialBar from './SocialBar.jsx';
import ShinyText from './TxtComp/ShinyText.jsx';
import ContactList from './ContactList.jsx';
import { useMediaQuery } from 'react-responsive';
import Avatar from '/AlbatrossAvatar.png'

function SideBar() {
    const isMobile = useMediaQuery({maxWidth: 974});
    return (
        <>
            <h2>Craig Johnson</h2>
            <div className="avatar">
                <img src={Avatar} className='Albatross'></img>
            </div>

            {isMobile ? <SocialBar/> : <ContactList/>}

        </>
    );
};

export default SideBar;
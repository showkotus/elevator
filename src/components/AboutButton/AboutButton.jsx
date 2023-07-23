import { Link } from "react-router-dom";
import './AboutButton.css'
// eslint-disable-next-line react/prop-types
const AboutButton = ({ text }) => {
    return (
        <div className="aboutBtn">
            <div className="flex flex-wrap items-center gap-x-4 my-8 button-container">
                <Link className={`${text == 'company' ? 'activeBtn' : ''}`} to={'/company-profile'}>Company Profile</Link>
                <Link className={`${text == 'view' ? 'activeBtn' : ''}`} to={'/management-message'}>Managing Director&apos;s Message</Link>
                <Link className={`${text == 'cer' ? 'activeBtn' : ''}`} to={'/certificate'}>Certificate</Link>
                <Link className={`${text == 'faq' ? 'activeBtn' : ''}`} to={'/faq'}>FAQ</Link>
                <Link className={`${text == 'video' ? 'activeBtn' : ''}`} to={'/video'}>Video</Link>
            </div>
        </div>
    );
};

export default AboutButton;
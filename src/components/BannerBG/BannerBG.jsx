import './BannerBG.css'
import contact from '../../assets/others/contact.webp'
// eslint-disable-next-line react/prop-types
const BannerBG = ({title}) => {
    return (
        <div className='img-section'>
            <img src={contact} alt="img of the banner section" />    
            <h3>{title}</h3>
        </div>
    );
};

export default BannerBG; 
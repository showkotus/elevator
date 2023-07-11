import './LatestNews.css'
// eslint-disable-next-line react/prop-types
const Card = ({ prop }) => {
    // eslint-disable-next-line react/prop-types
    const { img, description, date1, date2 } = prop
    return (
        <div className="card-container">
            <div className='img-content'>
                <img src={img} />
            </div>
            <div className='date-content'>
                <span>{date1}</span>
                <span>{date2}</span>
            </div>
            <h3>{description}</h3>
        </div>
    );
};

export default Card;
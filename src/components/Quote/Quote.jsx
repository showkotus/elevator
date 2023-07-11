
import { Link, useNavigate } from 'react-router-dom';
import './Quote.css'
const Quote = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='container'>
                <div onClick={() => navigate('/contact')} className='quote-container cursor-pointer'>
                    <h2>Get a quote about your elevator needs!</h2>
                    <Link to={'/contact'}><button>contact us now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Quote;
import { Link } from 'react-router-dom';
import './ProductList.css'
const ProductList = () => {
    return (
        <div className='list-container'>
            <h1></h1>
            <ul>
                <li><Link to={'/passenger-elevator'}>Passenger Elevator</Link></li>
                <li><Link to={'/home-elevator'}>Home Elevator</Link></li>
                <li><Link to={'/hospital-elevator'}>Hospital Elevator</Link></li>
                <li><Link to={'/freight-elevator'}>Freight Elevator</Link></li>
                <li><Link to={'/escalators-moving-walks'}>Escalators & Moving Walks</Link></li>
            </ul>
        </div>
    );
};

export default ProductList;
import { AiOutlinePlus } from 'react-icons/ai';
import img from '../../assets/banner/descption.jpg'
import './Shape.css'
const Shape = () => {
    return (
        <div className='container'>
            <div className='mb-12'>
                <div className='skewbox'>
                    <div className='imgBox'>
                        <img src={img} alt="" />
                    </div>
                    <div className='skewboxContent'>
                        <div className='textContent'>
                            <h2>Promoting the World-Renowned Global Brand OTIS in Bangladesh</h2>
                            <p>The OTIS ELEVATOR COMPANY can trace its origins to 1853 in New York City. The first passenger elevator was installed in New York City in 1856. The company was founded in 1853 after Elisha Otis invented the <strong>elevator safety brake, a mechanism that automatically locks the elevator if the hoisting rope breaks.</strong> </p>
                            <p>The Otis elevator is universally acknowledged as one of the best in the world. These elevators can be found in iconic buildings such as the Eiffel Tower, the Empire State Building, and Burj Khalifa. Otis offers products and services through its companies in approximately 200 countries and territories</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shape;
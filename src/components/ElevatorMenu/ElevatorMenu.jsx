import './ElevatorMenu.css'
import img from '../../assets/banner/descption.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
const ElevatorMenu = () => {
    return (
        <div className="my-8 md:my-16">
            <div className="container">
                <div className="elevatro-content md:grid grid-cols-2 gap-x-4 bg-white">
                   <div className='hidden md:block'>
                        <img src={img} alt="" />
                   </div>
                   <div className='p-8 text-center bg-[#df1b33]'>
                        <h2>Promoting the World-Renowned Global Brand OTIS in Bangladesh</h2>
                        <p>The OTIS ELEVATOR COMPANY can trace its origins to 1853 in New York City. The first passenger elevator was installed in New York City in 1856. The company was founded in 1853 after Elisha Otis invented the <strong>elevator safety brake, a mechanism that automatically locks the elevator if the hoisting rope breaks.</strong> </p>
                        <p>The Otis elevator is universally acknowledged as one of the best in the world. These elevators can be found in iconic buildings such as the Eiffel Tower, the Empire State Building, and Burj Khalifa. Otis offers products and services through its companies in approximately 200 countries and territories</p>
                        <button><AiOutlinePlus size={30}/></button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatorMenu;
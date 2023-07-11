import { useContext } from 'react';
import undercon from '../../assets/under.webp'
import { NavbarContext } from '../../context/ContextProvider';
const UnderConstruction = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div className="marginTop h-[90vh] w-full grid place-items-center">
            <div>
                <h1 className='font-bold mb-4 text-red-500 uppercase text-center text-2xl'>Our Site is Underconstruction...</h1>
                <img src={undercon} alt="" />
            </div>
        </div>
    );
};
 
export default UnderConstruction;
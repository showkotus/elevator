import BannerBG from "../../../components/BannerBG/BannerBG";
import passenger from '../../../assets/banner/lift3.jpg'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useContext, useState } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
const HospitalElevator = () => {
    const [showText, setShowText] = useState(false)
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const handleText = () => {
        setShowText(!showText)
    }
    return (
        <div className="marginTop">
            <BannerBG title={"Hospital Elavator"} />
            <div className="container px-2">
                <h1 className="my-6 text-2xl font-bold">Hospital Elevator</h1>
                <div className="my-12 flex flex-col md:flex-row items-center gap-x-[3%] gap-y-8">
                    <div className="w-full md:w-[42%]">
                        <img src={passenger} alt="" className="w-full" />
                    </div>
                    <div className="w-full md:w-[55%]">
                        <p className="text-xl text-justify">Hospital lifts, also known as hospital elevators or medical elevators, are specialized vertical transportation systems designed to meet the unique needs of healthcare facilities such as hospitals, clinics, and medical centers. These elevators play a crucial role in patient care, allowing for efficient movement of patients, medical staff, and essential medical equipment between different floors of the facility. Hospital lifts are equipped with advanced features and safety measures to ensure the smooth and safe transportation of patients and medical personnel.</p>
                        <div className="flex gap-x-4 items-center mt-8">
                            <p className="text-xl">Here&apos;s an elaborate overview of hospital lifts:</p>
                            {
                                !showText ?
                                    <button onClick={() => handleText()}><AiFillPlusCircle size={30} /></button>
                                    :
                                    <button onClick={() => handleText()}><AiFillMinusCircle size={30} /></button>
                            }
                        </div>
                    </div>
                </div>
                <div className={`${!showText ? "collapsable-container" : "active_collapsable_container"}`}>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>1. Patient Transportation:</strong> Hospital lifts are primarily designed to transport patients comfortably and safely. The elevators are spacious enough to accommodate stretchers and medical beds, allowing healthcare professionals to move patients between different hospital departments, such as operating rooms, recovery areas, intensive care units (ICUs), and patient rooms.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>2. Bed and Stretcher Compatibility:</strong> Hospital elevators are equipped with larger dimensions and a higher weight capacity to accommodate hospital beds, stretchers, and medical equipment. The design ensures smooth and stable movement to minimize any discomfort for patients during transportation.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>3. Specialized Controls:</strong> Hospital elevators often feature user-friendly and specialized controls to facilitate easy access for medical staff. These may include large buttons, hands-free or touchless options, and extra space for medical personnel to operate equipment comfortably while inside the elevator.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>4. Emergency Operation:</strong> Hospital lifts are designed with emergency backup systems to ensure operation during power outages or emergencies. This feature is critical to maintaining continuous patient care and the efficient movement of patients during unforeseen events.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>5. Code Compliance and Safety Features:</strong> Hospital lifts adhere to strict safety regulations and codes specific to healthcare environments. They are equipped with a range of safety features, including:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li>Overload sensors to prevent operation if the elevator exceeds its weight capacity.</li>
                            <li>Emergency stop buttons to halt the elevator in case of emergencies.</li>
                            <li>Door sensors to prevent the doors from closing when an object or person is in the doorway.</li>
                            <li>Fire-rated doors to contain the spread of fire in case of emergencies.</li>
                            <li>Battery-operated lighting and ventilation to ensure safety during power outages.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>6. Infection Control:</strong> Hospitals prioritize infection control, and hospital lifts are no exception. These elevators often feature antimicrobial materials and touchless controls to minimize the risk of cross-contamination and the spread of infections.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>7. Priority Service and Destination Dispatch:</strong> Some modern hospital lifts are equipped with destination dispatch systems that optimize elevator traffic flow. This feature helps to reduce waiting times and provides priority service to medical staff transporting patients or critical medical equipment.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>8. Capacity Management:</strong> Hospital elevators may include systems to monitor and manage elevator usage, allowing staff to prioritize specific floors or maintain specific elevators for certain patient categories.</h3>
                    </div>
                    <p className="text-xl mt-8 text-justify">In summary, hospital lifts are specialized vertical transportation systems tailored to the unique requirements of healthcare facilities. They prioritize patient comfort, safety, and efficient movement between floors while also supporting the needs of medical staff and vital medical equipment. Hospital lifts play a crucial role in ensuring effective patient care and streamlined operations within healthcare environments.</p>
                </div>
            </div>
        </div>
    );
};

export default HospitalElevator;
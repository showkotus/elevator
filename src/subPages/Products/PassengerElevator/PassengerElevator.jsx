import BannerBG from "../../../components/BannerBG/BannerBG";
import passenger from '../../../assets/banner/lift1.jpg'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useContext, useState } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
const PassengerElevator = () => {
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
            <BannerBG title={"Passenger Elavator"} />
            <div className="container px-2">
                <h1 className="my-6 text-2xl font-bold">Passenger Elevator</h1>
                <div className="my-12 flex flex-col md:flex-row items-center gap-x-[3%] gap-y-8">
                    <div className="w-full md:w-[42%]">
                        <img src={passenger} alt="" className="w-full" />
                    </div>
                    <div className="w-full md:w-[55%]">
                        <p className="text-xl text-justify">A passenger elevator, commonly known as an elevator or lift, is a vertical transportation device designed to move people and goods between different floors or levels within a building or structure. Elevators have become an integral part of modern urban life, making it convenient and efficient to move between floors in tall buildings, commercial complexes, residential apartments, and other structures.</p>
                        <div className="flex gap-x-4 items-center mt-8">
                            <p className="text-xl">Here are some key details about passenger elevators:</p>
                            {
                                !showText ?
                                    <button onClick={() => handleText()}><AiFillPlusCircle size={30} /></button>
                                    :
                                    <button onClick={() => handleText()}><AiFillMinusCircle size={30} /></button>
                            }
                        </div>
                    </div>
                </div>
                <div className={`${!showText? "collapsable-container" : "active_collapsable_container"}`}>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">1. Components:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Car:</strong> The enclosed platform where passengers and goods are transported. It can be made of steel, glass, or other materials.</li>
                            <li><strong>Hoistway (Shaft):</strong> The vertical shaft through which the elevator car moves. It is typically constructed of strong materials such as concrete or steel.</li>
                            <li><strong>Doors:</strong> Elevator doors are located at each floor and in the car to allow passengers to enter and exit. Modern elevators often have automatic doors for convenience and safety.</li>
                            <li><strong>Control System:</strong> The electronic system that operates the elevator, managing floor selection, door opening/closing, and smooth motion between floors.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">2. Types of Passenger Elevators:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Traction Elevators:</strong> These elevators use steel ropes or belts attached to a counterweight and a motor-driven pulley system to move the elevator car. </li>
                            <li><strong>Hydraulic Elevators:</strong> These elevators use a hydraulic system, including a piston and fluid, to lift the elevator car.</li>
                            <li><strong>Machine-Room-Less (MRL) Elevators:</strong> MRL elevators combine the advantages of traction and hydraulic systems but eliminate the need for a separate machine room, making them more space-efficient.</li>
                            <li><strong>Vacuum Elevators:</strong> These futuristic elevators use air pressure differences to move the car, eliminating the need for traditional ropes or pistons.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">3. Safety Features:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Overload Sensors:</strong> Detect if the elevator is carrying more weight than its maximum capacity and prevent operation until the excess weight is removed.</li>
                            <li><strong>Emergency Stop Button:</strong> Allows passengers to stop the elevator in case of an emergency or malfunction.</li>
                            <li><strong>Door Sensors:</strong> Prevent doors from closing if an object or person is detected in the doorway.</li>
                            <li><strong>Backup Power:</strong> Ensures that the elevator can continue to operate during power outages.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">4. Speed and Capacity:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li>Elevator speeds can vary widely, from relatively slow (e.g., 0.3 m/s) in low-rise buildings to high-speed elevators (up to 20 m/s) in skyscrapers.</li>
                            <li>The capacity of an elevator is measured in terms of weight (in kilograms) or the number of passengers it can carry. Standard elevators usually have capacities between 4 to 25 people.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">5. Maintenance:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li>Regular maintenance is crucial to ensure the safe and efficient operation of elevators. Elevator service providers conduct routine inspections, cleaning, and repairs to maintain their performance.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="font-semibold text-xl">6. Accessibility:</h3>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li>Modern passenger elevators are designed to be accessible to people with disabilities. They include features such as braille buttons, audible announcements, and wider doors to accommodate wheelchairs.</li>
                        </ul>
                    </div>
                    <p className="text-xl mt-8 text-justify">Overall, passenger elevators have revolutionized vertical transportation, making buildings more accessible, efficient, and accommodating to people&apos;s needs in today&apos;s urbanized world.</p>
                </div>
            </div>
        </div>
    );
};

export default PassengerElevator;
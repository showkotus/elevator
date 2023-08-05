import { useState } from "react";
import { useContext } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
import home from '../../../assets/banner/lift2.jpg'
import BannerBG from "../../../components/BannerBG/BannerBG";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const HomeElevator = () => {
    const [showText, setShowText] = useState(false)
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const handleText = () => {
        setShowText(!showText)
    }
    return (<div className="marginTop">
        <BannerBG title={"Home Elavator"} />
        <div className="container px-2">
            <h1 className="my-6 text-2xl font-bold">Home Elevator</h1>
            <div className="my-12 flex flex-col md:flex-row items-center gap-x-[3%] gap-y-8">
                <div className="w-full md:w-[42%]">
                    <img src={home} alt="" className="w-full" />
                </div>
                <div className="w-full md:w-[55%]">
                    <p className="text-xl text-justify">A home elevator is a specialized type of residential elevator designed to provide convenient and easy access between different levels of a private residence. Unlike commercial elevators found in office buildings and public spaces, home elevators are tailored to meet the unique requirements and aesthetics of individual homes. They offer numerous benefits, particularly for those with mobility challenges, as well as for homeowners seeking to add a touch of luxury and practicality to their living spaces.</p>
                    <div className="flex gap-x-4 items-center mt-8">
                        <p className="text-xl">Here are some key features and aspects of home elevators:</p>
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
                    <h3 className="text-xl"><strong>1. Design and Types:</strong> Home elevators come in various designs and configurations to suit different architectural styles and space constraints. Common types include:</h3>
                    <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                        <li>Hydraulic Home Elevators: These use a hydraulic system with a piston and fluid to lift the elevator car. They are known for their smooth and quiet operation.</li>
                        <li>Traction Home Elevators: Similar to commercial elevators, these use steel ropes or belts and a counterweight to move the elevator car. They are often chosen for their energy efficiency and space-saving benefits.</li>
                        <li>Vacuum Home Elevators: These futuristic elevators use air pressure differences to move the car, eliminating the need for traditional ropes or pistons. They are often chosen for their unique design and minimal space requirements.</li>
                    </ul>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>2. Accessibility and Convenience:</strong> One of the primary reasons for installing a home elevator is to enhance accessibility for individuals with mobility challenges, such as the elderly or those with disabilities. Home elevators offer a safe and efficient means of moving between floors, eliminating the need to navigate stairs, thus reducing the risk of accidents and injuries.</h3>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>3. Increased Property Value:</strong> Adding a home elevator can significantly increase the resale value of a property. Many homebuyers, especially those seeking luxury and convenience, consider the presence of an elevator as a valuable asset.</h3>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>4. Customization and Aesthetics:</strong> Home elevators can be customized to blend seamlessly with the interior design and décor of the home. They are available in various finishes, materials, and cab designs, allowing homeowners to match their unique style and preferences.</h3>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>5. Safety Features:</strong> Home elevators are equipped with various safety features to protect passengers and ensure safe operation. These features may include emergency stop buttons, door sensors, backup power systems, and phone communication for emergencies.</h3>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>6. Installation Considerations:</strong> Installing a home elevator requires careful planning, including consideration of available space, load-bearing capacity of the home&apos;s structure, and compliance with building codes and safety regulations.</h3>
                </div>
                <div className="my-4">
                    <h3 className="text-xl"><strong>7. Maintenance:</strong> Regular maintenance is essential to keep the home elevator operating smoothly and safely. Homeowners should schedule routine inspections and maintenance with qualified professionals to ensure optimal performance.</h3>
                </div>
                
                <p className="text-xl mt-8 text-justify">In summary, a home elevator is a valuable addition to any residence, providing enhanced accessibility, convenience, and potential property value appreciation. It is an investment that not only improves the quality of life for residents but also adds a touch of luxury and elegance to the overall living space.</p>
            </div>
        </div>
    </div>
    );
};


export default HomeElevator;
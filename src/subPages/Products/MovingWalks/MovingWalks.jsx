import BannerBG from "../../../components/BannerBG/BannerBG";
import passenger from '../../../assets/banner/lift4.jpg'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useContext, useState } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
const MovingWalks = () => {
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
            <BannerBG title={"Moving Walks"} />
            <div className="container px-2">
                <h1 className="my-6 text-2xl font-bold">Escalators and moving walks</h1>
                <div className="my-12 flex flex-col md:flex-row items-center gap-x-[3%] gap-y-8">
                    <div className="w-full md:w-[42%]">
                        <img src={passenger} alt="" className="w-full" />
                    </div>
                    <div className="w-full md:w-[55%]">
                        <p className="text-xl text-justify">Escalators and moving walks, also known as travelators or moving sidewalks, are mechanical transportation systems commonly found in public spaces, shopping malls, airports, train stations, and other high-traffic areas. They provide a convenient and efficient way to move people between different levels of a building or over longer distances without the need for them to walk or climb stairs. Let&apos;s explore each of these transportation systems:</p>
                        <div className="flex gap-x-4 items-center mt-8">
                            <p className="text-xl">Here are some key details about Escalators and moving walks:</p>
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
                        <h3 className="text-xl"><strong>1. Escalators:</strong> Escalators are continuously moving staircases that transport people vertically between different floors. They consist of a set of steps or treads that move in a loop, powered by an electric motor. The steps form a continuous surface, and passengers step on and off the moving treads at the start and end of the escalator.</h3>
                        <h2 className="my-4 text-xl ml-2">Key features of escalators include:</h2>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Handrails:</strong> Escalators are equipped with handrails on both sides, allowing passengers to hold on for stability and support while riding.</li>
                            <li><strong>Safety Features:</strong> Escalators are equipped with various safety features, such as skirt brushes, comb plates, and sensors to detect objects or obstructions in the path of the steps, which trigger an emergency stop.</li>
                            <li><strong>Direction:</strong> Most escalators are unidirectional, moving either upwards or downwards, but some can be programmed to change direction depending on the traffic flow.</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>2. Moving Walks (Travelators):</strong> Moving walks are horizontal, moving walkways that transport people across longer distances, typically on a single level. They are especially useful in large airports or transit hubs, where passengers need to cover significant distances without walking.</h3>
                        <h2 className="my-4 text-xl ml-2">Key features of moving walks include:</h2>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Continuous Motion:</strong> Similar to escalators, moving walks feature a continuous loop of flat surfaces that move in a specific direction, allowing passengers to step on and off as needed.</li>
                            <li><strong>Speed Control:</strong> The speed of moving walks can be adjusted to match the walking pace of passengers.</li>
                            <li><strong>Handrails:</strong> Moving walks often have handrails on both sides to provide additional support and convenience.</li>
                        </ul>
                        <h2 className="mt-6 mb-4 text-xl">Both escalators and moving walks have several advantages, including:</h2>
                        <ul className="ml-8 md:ml-20 text-xl list-disc text-justify">
                            <li><strong>Convenience:</strong> They save time and effort for passengers, particularly those carrying luggage, pushing carts, or with limited mobility.</li>
                            <li><strong>Capacity:</strong> Escalators and moving walks can handle a large number of people simultaneously, improving crowd flow in busy areas.</li>
                            <li><strong>Safety:</strong> These transportation systems are designed with safety features to prevent accidents and ensure passenger well-being.</li>
                            <li><strong>Aesthetics:</strong> They can serve as architectural focal points and enhance the overall design of the building.</li>
                        </ul>
                    </div>

                    <p className="text-xl mt-8 text-justify">However, it&apos;s important to note that while escalators and moving walks are generally safe, passengers should exercise caution and follow posted guidelines to prevent accidents and ensure a smooth flow of traffic.</p>
                </div>
            </div>
        </div>
    );
};

export default MovingWalks;
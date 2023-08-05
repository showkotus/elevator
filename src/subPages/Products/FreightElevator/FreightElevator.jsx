import BannerBG from "../../../components/BannerBG/BannerBG";
import passenger from '../../../assets/banner/lift5.jpeg'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useContext, useState } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
const FreightElavator = () => {
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
            <BannerBG title={"Freight Elavator"} />
            <div className="container px-2">
                <h1 className="my-6 text-2xl font-bold">Freight Elevator</h1>
                <div className="my-12 flex flex-col md:flex-row items-center gap-x-[3%] gap-y-8">
                    <div className="w-full md:w-[42%]">
                        <img src={passenger} alt="" className="w-full" />
                    </div>
                    <div className="w-full md:w-[55%]">
                        <p className="text-xl text-justify">A freight elevator, also known as a goods or cargo elevator, is a type of industrial elevator specifically designed to transport heavy loads, large items, and goods between different levels of a building or facility. Unlike passenger elevators, which prioritize passenger comfort, freight elevators are built to handle robust and bulky items, making them essential for various industrial, commercial, and manufacturing applications.</p>
                        <div className="flex gap-x-4 items-center mt-8">
                            <p className="text-xl">Here are some key features and characteristics of freight elevators:</p>
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
                        <h3 className="text-xl"><strong>1. Capacity and Size:</strong> Freight elevators have a significantly higher weight capacity compared to passenger elevators. They can handle loads ranging from a few hundred kilograms to several tons, depending on their design and intended purpose. The elevator&apos;s size is also larger to accommodate large crates, pallets, and equipment.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>2. Heavy-Duty Construction:</strong> Freight elevators are constructed with heavy-duty materials, such as reinforced steel, to withstand the rigorous demands of transporting heavy loads. The walls, floors, and doors are designed to endure impacts and resist wear and tear over time.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>3. Loading Configurations:</strong> Freight elevators may have different loading configurations, such as front-loading, side-loading, or dual-entry, to allow for easy and efficient loading and unloading of goods.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>4. Manual and Automatic Operation:</strong> Some freight elevators require manual operation, where workers operate the elevator controls to move goods between floors. Others are equipped with automatic controls for convenience and efficiency.</h3>
                    </div>
                   
                    <div className="my-4">
                        <h3 className="text-xl"><strong>5. Safety Features:</strong> Freight elevators come with a range of safety features to protect both goods and operators. These features may include door interlocks, emergency stop buttons, overload sensors, and safety gates to prevent accidental access to the elevator shaft.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>6. Freight Elevator Doors:</strong> The doors of freight elevators are typically larger and sturdier than those of passenger elevators to accommodate large and bulky items. Some freight elevators have bi-parting doors or collapsible gates for easier loading and unloading.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>7. Vertical and Horizontal Transportation:</strong> Freight elevators can be designed for both vertical and horizontal transportation. Some models can move along a horizontal track, allowing goods to be transported to different areas of the building, such as warehouses or loading docks.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>8. Industrial Applications:</strong> Freight elevators are widely used in various industrial settings, including manufacturing plants, warehouses, distribution centers, retail stores, and construction sites. They facilitate the movement of heavy machinery, raw materials, finished products, and other goods.</h3>
                    </div>
                    <div className="my-4">
                        <h3 className="text-xl"><strong>9. Customization:</strong> Manufacturers offer customization options to meet the specific needs of businesses. This includes adjusting the elevator&apos;s size, capacity, and loading configurations to suit the nature of the goods being transported.</h3>
                    </div>
                    <p className="text-xl mt-8 text-justify">In summary, freight elevators are essential tools for efficiently and safely moving heavy loads and goods within industrial and commercial settings. They enhance productivity and operational efficiency by streamlining the movement of large and bulky items between different levels of a building or facility.</p>
                </div>
            </div>
        </div>
    );
};

export default FreightElavator;
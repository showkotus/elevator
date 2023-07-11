import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import './FactoryView.css'
import fac1 from '../../assets/about/fac1.webp'
import fac2 from '../../assets/about/fac2.webp'
import fac3 from '../../assets/about/fac3.webp'
import fac4 from '../../assets/about/fac4.webp'
import fac5 from '../../assets/about/fac5.webp'
import fac6 from '../../assets/about/fac6.webp'
import fac7 from '../../assets/about/fac7.webp'
import fac8 from '../../assets/about/fac8.webp'
import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
// eslint-disable-next-line react/prop-types
const FactoryView = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    const facs1 = [
        {
            id: 1,
            name: "Finland SGE6 CNC punching shear compound machine",
            img: fac1
        },
        {
            id: 2,
            name: "machining center",
            img: fac2
        },
        {
            id: 3,
            name: "sheetmetal line",
            img: fac3
        },
        {
            id: 4,
            name: "Yamaha mounter",
            img: fac4
        },
    ]
    const facs2 = [
        {
            id: 1,
            name: "Door Machine Testing",
            img: fac5
        },
        {
            id: 2,
            name: "Precision Testing Center",
            img: fac6
        },
        {
            id: 3,
            name: "Resistance Testing",
            img: fac7
        },
        {
            id: 4,
            name: "Three-Coordinates Measuring",
            img: fac8
        },
    ]
    return (
        <div className={`marginTop`}>
            {/* <BannerBG title={"Factory View"} />
            <div className="container">
                <AboutButton text={'view'} />
                <div className="factory-container">
                    <div>
                        <div className="my-8">
                            <h1>“6S” Field-management and Lean Production Management</h1>
                            <p>In order to meet the high demand of product performance and individuation, the company imported first-class production and processing equipments from Europe, America, Japan and so on. Practicing “6S” field-management and lean production management make sure producing high-grade, precision and advanced elevators for users. Import first-class production and processing equipment including NIGHT-TRAIN sheet metal fabrication pipeline, Finland SGE6 NC punching and shearing machine, coating pipeline, laser cutting machine, bending machine, punching machine.</p>
                        </div>
                        <div className="my-8">
                            <h1>New Test Tower View</h1>
                            <p>The new test tower of Hosting Elevator is prepared to be set up in the new industrial park. The tower is high 165.2m. The ground height of land is 156m and extends three storeys underground about 9.2m. There are 9 test shaft ways which can operate 11 elevators at the same time and realize the function test for 8 elevator group control. The maximum of speed detection is up to 10m/s which can be used to the design and detect to high-end elevator and technology. </p>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                facs1.map(fac => <div key={fac.id}>
                                    <img src={fac.img} alt="" />
                                    <h2>{fac.name}</h2>
                                </div>)
                            }
                        </div>
                        <div className="my-8">
                            <h1>Build Precision Detection System</h1>
                            <p>Hosting Elevator not only import Automatic Optical Inspection, Spectrum Analyzer, CMM and found precision detection experimental center, but also strictly follow international QC management to elevator production and set rigorous manufacturing standards of Hosting Elevator to make sure every elevator remarkable.</p>
                            <p>Strong Manufacturing Capability</p>
                            <p>Hosting Elevator has a large manufacturing center about escalator and moving walkway. On the basis of independent research and innovation, import first-class complete sets of equipment in the world worth billions to improve productivity and ensure product quality. </p>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                facs2.map(fac => <div key={fac.id}>
                                    <img src={fac.img} alt="" />
                                    <h2>{fac.name}</h2>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div> */}
            <UnderConstruction/>
        </div>
    );
};

export default FactoryView;
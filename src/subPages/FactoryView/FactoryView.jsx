import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import './FactoryView.css'
// import fac1 from '../../assets/about/fac1.webp'
// import fac2 from '../../assets/about/fac2.webp'
// import fac3 from '../../assets/about/fac3.webp'
// import fac4 from '../../assets/about/fac4.webp'
// import fac5 from '../../assets/about/fac5.webp'
// import fac6 from '../../assets/about/fac6.webp'
// import fac7 from '../../assets/about/fac7.webp'
// import fac8 from '../../assets/about/fac8.webp'
import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";
// import md from '../../assets/management/img_1.jpg'
// eslint-disable-next-line react/prop-types
const FactoryView = () => {
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    // const facs1 = [
    //     {
    //         id: 1,
    //         name: "Finland SGE6 CNC punching shear compound machine",
    //         img: fac1
    //     },
    //     {
    //         id: 2,
    //         name: "machining center",
    //         img: fac2
    //     },
    //     {
    //         id: 3,
    //         name: "sheetmetal line",
    //         img: fac3
    //     },
    //     {
    //         id: 4,
    //         name: "Yamaha mounter",
    //         img: fac4
    //     },
    // ]
    // const facs2 = [
    //     {
    //         id: 1,
    //         name: "Door Machine Testing",
    //         img: fac5
    //     },
    //     {
    //         id: 2,
    //         name: "Precision Testing Center",
    //         img: fac6
    //     },
    //     {
    //         id: 3,
    //         name: "Resistance Testing",
    //         img: fac7
    //     },
    //     {
    //         id: 4,
    //         name: "Three-Coordinates Measuring",
    //         img: fac8
    //     },
    // ]
    return (
        <div className={`marginTop`}>
            <BannerBG title={"Message"} />
            <div className="container">
                <AboutButton text={'view'} />
                {/* <div className="factory-container">
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
                </div> */}
                <div className="management-container">
                    <div className="flex flex-col-reverse md:flex-row-reverse gap-8 mb-8 items-center">
                        <div className="w-full md:w-[50%] lg:w-[58%]">
                            <h1>Managing Director’s Message</h1>
                            <h2>Name: xxxxx</h2>
                            <h3>position: xxxxxx</h3>
                            <p>I am honored and delighted to welcome you to the &#34;Elevator Engineers Ltd&#34; website. Since our inception in 2005 as Elevator Engineers Co., and our transformation into a limited company in 2013, we have strived to become a leading provider of elevator and lift solutions in Bangladesh. And we offer unmatched services to our valued clients.</p>
                            <p>At Elevator Engineers Ltd., we take immense pride in the corporate partnerships we have cultivated over the years. we are committed to build strong working relationship with corporate bodies. Our corporate clients like Meghna Group of Industries, TK Group, Rangs Group, City Group, Bashundhara Group, Renata Limited, Partex Group, Arla, Rupayan Housing Estate Ltd. SKCD are always relied on us. </p>
                            <p className="hidden lg:block">We cherish these partnerships & trust which our clients place on us.</p>
                            <p className="hidden lg:block">As a company, we are deeply honored to be involved in some prestigious projects of Government of Bangladesh. Out of which the BAF Base Shekh Hasina, Cox Bazar and BAF Base Bangbandhu, Kurmitola, Dhaka are notable.</p>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[40%]">
                            {/* <img src={md} alt="md's image..." className="rounded-lg mb-4 border" /> */}
                            <div className="w-full h-full border rounded-lg h-[300px]">image of MD...</div>
                        </div>
                    </div>
                    <div>
                        <p className="lg:hidden">We cherish these partnerships & trust which our clients place on us.</p>
                        <p className="lg:hidden">As a company, we are deeply honored to be involved in some prestigious projects of Government of Bangladesh. Out of which the BAF Base Shekh Hasina, Cox Bazar and BAF Base Bangbandhu, Kurmitola, Dhaka are notable.</p>
                        <p>These are the STAR of our dedication to delivering excellence in every endeavor.</p>
                        <p>We have a brilliant Support & Technical team to overcoming the challenges, which have been successful in bringing Elevator Engineers Ltd to a new milestone of recognition.</p>
                        <p>Our highly knowledgeable and experienced team of experts ensures proper install, maintain & support the elevators, escalators, generators, AVR, and other equipment with utmost professionalism.</p>
                        <p>Our highly knowledgeable and experienced team of experts ensures proper install, maintain & support the elevators, escalators, generators, AVR, and other equipment with utmost professionalism.</p>
                        <p>Our website serves as a portal to showcase our achievements, capabilities, and the comprehensive range of services we provide. We invite you to explore the site and learn more about our company, our valued clients, and the projects that have earned us accolades</p>
                        <p>As the Managing Director of Elevator Engineers Ltd., I extend my sincere gratitude to our clients, partners, and team members for their unwavering support. It is your trust and belief in our abilities that have propelled us to new heights and will continue to inspire us to strive for excellence in all that we do.</p>
                        <p>As the Managing Director of Elevator Engineers Ltd., I extend my sincere gratitude to our clients, partners, and team members for their unwavering support. It is your trust and belief in our abilities that have propelled us to new heights and will continue to inspire us to strive for excellence in all that we do.</p>
                        <p>Thank you for considering Elevator Engineers Ltd. for your elevator and lift needs. We assure you of our unwavering commitment to deliver the best all-round products and services, ensuring your complete satisfaction.</p>
                    </div>
                </div>
            </div>
            {/* <UnderConstruction/> */}
        </div>
    );
};

export default FactoryView;
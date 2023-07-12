import BannerBG from '../../components/BannerBG/BannerBG';
import './Modernization.css'
import mod from '../../assets/others/modern.webp'
import { NavbarContext } from '../../context/ContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Modernization = () => {
    const {setIsBanner} = useContext(NavbarContext)
    const navigate = useNavigate()
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div className='marginTop'>
            <BannerBG title={"Modernization"} />
            <div className='container'>
                <div className='modContainer'>
                    <img src={mod} alt="" className='w-full h-full' />
                    <div className='mb-6 py-4'>
                        <h1>What is elevator modernization</h1>
                        <p>Generally, the service life of an elevator is only about 20 to 30 years. With the increase of time, the elevator starts to age. The parts are aging, the system is backward, and the maintenance cost of the elevator is increased. At this time, it is necessary to modernize the elevator, replace parts, and upgrade components. Improve the safety and value of elevators.</p>
                    </div>
                    <hr />
                    <div className='mb-6 py-4'>
                        <h1>Why modernize your elevator</h1>
                        <div className='my-6'>
                            <h3>Safe question</h3>
                            <ul className='list-disc pl-12'>
                                <li>The need for multiple elevators has been in use for more than 20 years (or earlier). Elevators began to have various safety problems, and some elevators were not equipped with advanced safety devices. There are huge security risks.</li>
                                <li>The elevator needs frequent maintenance, and passengers feel uneasy.</li>
                                <li>The new safety regulations are updated. The elevator does not meet the standards and needs to be upgraded.</li>
                            </ul>
                        </div>
                        <div className='my-6'>
                            <h3>Efficiency problem</h3>
                            <ul className='list-disc pl-12'>
                                <li>The aging of the parts leads to a lower operating efficiency of the elevator and a longer waiting time for passengers.</li>
                            </ul>
                        </div>
                        <div className='my-6'>
                            <h3>Maintenance cost issues</h3>
                            <ul className='list-disc pl-12'>
                                <li>Due to the constraints of the technical conditions at that time, most of the elevators put into use 20 years ago used geared mainframes with high energy consumption. A small number of elevators still used obsolete non-inverter speed regulation devices, so the energy consumption was very high.</li>
                                <li>Elevators are aging and require frequent maintenance. The cost of maintenance is also increasing.</li>
                                <li>It takes more effort to pay attention to prevent security incidents.</li>
                            </ul>
                        </div>
                        <div className='my-6'>
                            <h3>User experience issues</h3>
                            <ul className='list-disc pl-12'>
                                <li>Frequent elevator problems can upset tenants. Especially older passengers.</li>
                                <li>In apartments and buildings, tenants began to change places due to elevator problems.</li>
                                <li>A worn elevator may affect the value of your building.</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='mb-6 py-4'>
                        <h1>Reasons to choose our modern service</h1>
                        <ul className='list-disc pl-12'>
                            <li>Increase elevator safety</li>
                            <li>Reduce passenger waiting time and improve work efficiency</li>
                            <li>Reduced elevator operating costs</li>
                            <li>Extend equipment life   </li>
                            <li>Ensure equipment complies with local national safety standards</li>
                            <li>Support various customized cars to improve passenger comfort</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h4>Reminder: Please inform the parameters and purpose of the elevator you need. We can provide you with a detailed quote</h4>
                    </div>
                    <div>
                       <button onClick={() => navigate('/contact')}>get a quote</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modernization;
import './CompanyProfile.css'
// eslint-disable-next-line react/prop-types
import company from '../../assets/about/company1.webp'
import company2 from '../../assets/about/company2.webp'
import AboutButton from '../../components/AboutButton/AboutButton';
import BannerBG from '../../components/BannerBG/BannerBG';
import { useContext } from 'react';
import { NavbarContext } from '../../context/ContextProvider';
// eslint-disable-next-line react/prop-types
const CompanyProfile = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div className='marginTop'>
            <BannerBG title={"Company Profile"} />
            <div className='container'>
                <AboutButton text="company" />
                <div className={`companyprofile-container`}>
                    {/* <img src={company} alt="" /> */}
                    <div className='my-6'>
                        <h1>ELEVATOR ENGINEERS LTD. Company Profile</h1>
                       
                        <p>
                        ELEVATOR ENGINEERS LTD. is a private limited company, established in 2005; we have over 15 years of collective expertise that give us a unique advantage in providing professional services to the clients. We are capable of providing the most value added and innovative service, render guaranteed satisfaction for every services. We can also work with clients that need something unique.
                        </p>
                    </div>
                    <hr />
                    {/* <div className='my-6'>
                        <h1>Hosting Company Video Overview</h1>
                        <iframe src="https://www.youtube.com/embed/kJiDuZJLdXQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/h9aGGwQXPKw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/ZrXrE2TuEtQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <p>vidoe will be upload..</p>
                    </div> */}
                    <hr />
                    <div className='my-6'>
                        <h1>Our services</h1>
                        <h3>Custom elevator</h3>
                        <p>We install, maintain, and/or support service for various types of Elevators, Escalator,Generator, AVR etc. Whether you need a new commercial elevator or modernization of an existing elevator or Residential elevator or Car lift or Hospital lift or service on any of the above, we can render your required service. We hope you will find our effort most competitive in all respect.</p>
                        <h3>Modern elevator service</h3>
                        <p>We also provides <span className='text-red-500'>elevator modernization services</span>. Improve elevator safety performance, comfort, and work efficiency.</p>
                        <p>
                        We mainly import European Standard OTIS brand lift (American OTIS Investment Group Co., Ltd.) from China and fire door & door accessories. We also provide other brands lift as per clients requirement. At the same time, we. install and maintain European Standards Safety Code, and/or service various types of lifts.
                        </p>
                    </div>
                    <hr />
                    <div className='my-6'>
                        <h1>CE/UL/TUV Certification</h1>
                        <p>As to the qualification, ELEVATOR ENGINEERS LTD.is an elevator manufacturing enterprise in China which is awarded by DNV the certificates of the ISO9001 quality management system, ISO14001 environmental management system, OHSAS18001 occupational health and safety management system, and the certificate of SA8000 social responsibility management system issued by TUV. </p>
                        <p>All products are developed and manufactured in accordance with the European EN81-20/50 and EN115 standards and have CE and UL certificates. ELEVATOR ENGINEERS LTD. products are designed according to international standards and meet the standard requirements of Europe,  Australia, and Asia, etc.</p>
                    </div>
                    <hr />
                    {/* <div className='my-6'>
                        <h1>Our Partner</h1>
                        <p>ELEVATOR ENGINEERS LTD. always following market requirement to get the trust from users around the world by its quality products and satisfactory service, expands market, establishes a sound marketing service network and service outlets and participates in different exhibition all over the world for communication. 1， 125 sales websites at domestic market and <span className='text-[#5b5550] font-bold'>more than 80 sales websites at overseas</span> .</p>
                        <img src={company2} alt="" />
                    </div> */}

                </div>
            </div>
        </div>

    );
};

export default CompanyProfile;
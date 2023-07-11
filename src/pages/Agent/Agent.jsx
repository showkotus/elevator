import { useContext } from 'react';
import BannerBG from '../../components/BannerBG/BannerBG';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Agent.css'
import { NavbarContext } from '../../context/ContextProvider';
const Agent = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div className='marginTop'>
            <BannerBG title={"Agent"}/>
            <div className='container'>
                <div className='agentCon my-8'>
                    <div className='my-6'>
                        <h1>Become a Distributor / Agent</h1>
                        <p>Hosting has established an extensive network of distributors all over the world and is eager to support any project in a successful and timely manner.</p>
                        <p>Hosting Group currently provides solutions to more than 100 countries around the world through its customers, including installation and maintenance companies.</p>
                        <p>To enter new markets, the company aims to establish long-term business partnerships through distribution services, commercial representation, manufacturing and acquisition agreements.</p>
                    </div>
                    <div className='my-6'>
                        <h2>What Can We Offer You?</h2>
                        <p>Advanced, market-leading elevator solutions at competitive prices</p>
                        <p>Marketing and sales support has achieved good market share and excellent economic benefits.</p>
                        <p>Train your salespeople</p>
                        <p>Thanks for your interest in becoming an Authorized Hosting elevator distributors! For inquiries about becoming a distributor, please email <span>www.elevatorbd.net</span></p>
                        <p>Sincerely invite agent to join us!</p>
                        <p>You may also leave your contact information and message, Our professional distributor`&apos;`s management team will contact you soon.</p>
                    </div>
                    <h3>INTERESTED IN BEING AN AGENT OR DISTRIBUTOR FOR HOSTING?</h3>
                    <div className='my-6'>
                        <ContactForm 
                        property={{cap: "Enter your inquiry details, We will reply you in 24 hours.", type: {name:"*Name", country:"Country", email: "*Email", company:"Company", telephone: "Telephone", indus:"Industry", address:"Address", post:"Postal Code", fax:"Fax", prod:"Main Product", annReq:"*Annual Requirement", textArea: "Special Comment" }}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agent;
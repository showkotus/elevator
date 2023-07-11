import BannerBG from '../../components/BannerBG/BannerBG';
import ContactForm from '../../components/ContactForm/ContactForm';
import ProductList from '../../components/ProductList/ProductList';
import './Product.css'
import prod1 from '../../assets/Products/prod1.jpg'
import prod2 from '../../assets/Products/prod2.webp'
import prod3 from '../../assets/Products/prod3.webp'
import prod4 from '../../assets/Products/prod4.webp'
import prod5 from '../../assets/Products/prod5.webp'
import prod6 from '../../assets/Products/prod6.webp'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../context/ContextProvider';
const Product = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    const pages = [
        {
            id:1,
            name: "Passenger Elevator",
            img: prod1,
            route: '/passenger-elevator'
        },
        {
            id:2,
            name: "Home/Residential Elevator",
            img: prod2,
            route: '/home-elevator'
        },
        {
            id:3,
            name: "Panoramic/Observation Elevator",
            img: prod3,
            route: '/panoramic-elevator'
        },
        {
            id:4,
            name: "Hospital/Bed Elevator",
            img: prod4,
            route: '/hospital-elevator'
        },
        {
            id:5,
            name: "Freight/Cargo Elevators",
            img: prod5,
            route: '/freight-elevator'
        },
        {
            id:6,
            name: "Escalators & Moving Walks",
            img: prod6,
            route: '/escalators-moving-walks'
        },
    ]
    return (
        <div className="marginTop">
            <BannerBG title={"Products"}/>
            <div className="container">
                <div className="productContainer flex flex-col md:flex-row gap-8 my-12">
                    <div className='w-full md:w-1/4'>
                        <ProductList/>
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h1>Leading Elevator Manufacturer in China</h1>
                        <hr />
                        <div className='my-6'>
                            <p className='my-6'>Hosting elevator is an artisan of the elevator, established in 1993. We are top 10 elevator company in China with the overall ability of independent research and development, manufacturing and service. We have a production base of over 300,000 square meters, and the test tower is over 165 meters high. The maximum speed is up to 10 m / s. The production capacity of the first stage has reached more than 20,000 sets per year. Our elevators are serving in more than 100+ countries, and 1000+ projects are using our elevators. Fully able to customize the elevator you need.</p>
                            <p className='my-6'>As a professional elevator manufacturer, Hosting elevator offer the following range of elevator products. include passenger elevator, gearless elevator, high-speed elevator, observation elevator, medical elevator, freight elevator, car elevator, villa elevator, escalator, moving walk, etc. Every elevator is a work of art that we have crafted.</p>
                        </div>
                        <div className='my-6'>
                            <h2>Our Best Selling Elevator& Escalators:</h2>
                            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                                {
                                    pages.map(page => <Link to={page.route} key={page.id} className='border rounded-t-lg'>
                                        <img src={page.img} alt={page.name} className='rounded-t-lg'/>
                                        <p className='my-8 text-center text-[1rem] font-bold'>{page.name}</p>
                                    </Link>)
                                }
                            </div>
                        </div>
                        <div className='my-6'>
                            <h2>Hosting Elevator Core Strengths：</h2>
                            <ul className='list-disc pl-12'>
                                <li>China TOP 10 Elevator Company</li>
                                <li>Full-Service For Various Elevators & Lift</li>
                                <li>Affordable Factory Price</li>
                                <li>Over 25 Years of experiences</li>
                                <li>24 hours after sales service</li>
                            </ul>
                        </div>
                        <p className='my-8'>We have a wealth of <span className='text-red-600'>manufacturing</span> capabilities. Your safety, we guard.</p>
                        <ContactForm 
                        property={{cap: "Enter your inquiry details, We will reply you in 24 hours.",cap2:"Contact Us Now", type: {name:"*Name",  email: "*Email", company:"Company", telephone: "Phone", textArea: "Message", product: "Products you want"}}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product; 
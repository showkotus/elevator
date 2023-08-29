import BannerBG from '../../components/BannerBG/BannerBG';
import ContactForm from '../../components/ContactForm/ContactForm';
import ProductList from '../../components/ProductList/ProductList';
import './Product.css'
import prod1 from '../../assets/Products/passengerEl.jpg'
import prod2 from '../../assets/Products/homeEl.jpg'
import prod3 from '../../assets/Products/prod3.webp'
import prod4 from '../../assets/Products/hospitalEl.jpg'
import prod5 from '../../assets/Products/freightEl.jpg'
import prod6 from '../../assets/Products/movingEl.jpg'
import productsBanner from '../../assets/Products/productBanner.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../context/ContextProvider';
const Product = () => {
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const pages = [
        {
            id: 1,
            name: "Passenger Elevator",
            img: prod1,
            route: '/passenger-elevator'
        },
        {
            id: 2,
            name: "Home/Residential Elevator",
            img: prod2,
            route: '/home-elevator'
        },
        {
            id: 3,
            name: "Panoramic/Observation Elevator",
            img: prod3,
            route: '/panoramic-elevator'
        },
        {
            id: 4,
            name: "Hospital/Bed Elevator",
            img: prod4,
            route: '/hospital-elevator'
        },
        {
            id: 5,
            name: "Freight/Cargo Elevators",
            img: prod5,
            route: '/freight-elevator'
        },
        {
            id: 6,
            name: "Escalators & Moving Walks",
            img: prod6,
            route: '/escalators-moving-walks'
        },
    ]
    const advantages = [
        {
            title: "1.  Exclusive OTIS Affiliation:",
            description: "Elevator Engineers Ltd. as the importer and supplier of OTIS elevators in Bangladesh, we present a direct pathway to the exceptional offerings that have solidified OTIS's stature as a global vanguard in elevator industry."
        },
        {
            title: "2.	Unmatched Expertise:",
            description: "To the elevator industry, our staff provides a wealth of knowledge and skill. We provide custom solutions made to fit the objectives of your particular project because we are aware of the unique requirements of the local market."
        },
        {
            title: "3.	High-Quality Range of Products:",
            description: "From passenger elevator to service elevators or moving walkway, you can choose from the extensive selection of OTIS elevators to meet the variety of architectural and practical requirements."
        },
        {
            title: "4.	Elevated Emphasis on Safety and Innovation:",
            description: "‘Customers Safety’ is our topmost priority. Since OTIS elevators are acknowledged for their cutting-edge safety features, and we rigorously check that every installation complies with the strictest international safety standards."
        },
        {
            title: "5.	Seamless Journey:",
            description: "Beginning with the initial consultation and ending with the ultimate installation, our client-centric approach ensures an uninterrupted interaction with the Customer. We are prepared to provide complete help at all times."
        },
    ]
    return (
        <div className="marginTop">
            <BannerBG title={"Products"} />
            <div className="container">
                <div className="productContainer flex flex-col md:flex-row gap-8 my-12">
                    <div className='w-full md:w-1/4'>
                        <ProductList />
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h2>Elevating the World: OTIS –Top Ranked Global Brand in Elevator Business</h2>
                        <hr />
                        <div className='my-6'>
                            <div>
                                <p>We are proud serving as the foremost importer and supplier of ‘OTIS’ elevators in Bangladesh. Our unwavering dedication to excellence, innovation, and customer contentment positioned us as unparallel for the renowned brand ‘OTIS’ elevators towards the dynamic architectural and urban milieu</p>
                            </div>
                            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mt-12'>
                                <p>Uplifting Excellence: We ensure each product we convey, conforms to the highest benchmarks of safety, dependability, and aesthetic appeal. Our mission is to furnish proper solutions towards architects, property developers, & proprietors with elevators & moving walkway that augment quality and experiential value.</p>
                                <img src={productsBanner} alt="" className='rounded-lg h-full object-cover' />
                            </div>
                        </div>
                        
                        <div className='mb-6 mt-12'>
                            <h2>Our Best Selling Elevator& Escalators:</h2>
                            <hr />
                            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                                {
                                    pages.map(page => <Link to={page.route} key={page.id} className='border rounded-t-lg'>
                                        <img src={page.img} alt={page.name} className='rounded-t-lg h-[300px] w-full' />
                                        <p className='my-8 text-center text-[1rem] font-bold'>{page.name}</p>
                                    </Link>)
                                }
                            </div>
                        </div>
                        <div className='my-8'>
                            <h2>Advantages of Opting for Elevator Engineers Limited:</h2>
                            <hr />
                            <ul className='mb-8'>
                                {
                                    advantages?.map((adv, index) =><li key={index} className='mb-2'><strong className='mr-1'>{adv.title}</strong>{adv.description}</li>)
                                }
                            </ul>
                            <p><strong>Elevate Your Endeavors with Us: </strong> Whether you envision a modern skyscraper, a commercial building, or a residential development, our collection of OTIS elevators is ready to increase the usefulness, appeal, and value of your endeavors.</p>
                            <p className='mt-2'><strong>Engage with Us:</strong> Boost your initiatives by working with the leading expert in vertical transportation in the field. Contact us right away to discuss your elevator needs, arrange a consultation, and become fully acquainted with the revolutionary power of OTIS elevators, as expertly delivered by Elevator Engineers Ltd.</p>
                            <p className='mt-12'>At our elevator company, our focus extends beyond just selling elevators. We have honed our specialization in not only providing top-notch elevator sales but also delivering a complete package of post-sale services that ensure the utmost satisfaction of our clients. Our expertise encompasses thorough testing, meticulous commissioning, and dedicated customer support.</p>
                        </div>
                        <div className='my-6'>
                            <h2>Hosting Elevator Core Strengths：</h2>
                            <hr />
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
                            property={{ cap: "Enter your inquiry details, We will reply you in 24 hours.", cap2: "Contact Us Now", type: { name: "*Name", email: "*Email", company: "Company", telephone: "Phone", textArea: "Message", product: "Products you want" } }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product; 
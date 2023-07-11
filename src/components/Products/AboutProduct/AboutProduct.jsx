import './AboutProduct.css'
import aboutprod1 from '../../../assets/Products/aboutprod1.webp'
import aboutprod2 from '../../../assets/Products/aboutprod2.webp'
import aboutprod3 from '../../../assets/Products/aboutprod3.webp'
import ContactForm from '../../ContactForm/ContactForm';
// eslint-disable-next-line react/prop-types
const AboutProduct = ({ title }) => {
    return (
        <div className='aboutProductCon '>
            <div className='container'>
                <div className=' flex flex-col-reverse md:flex-row gap-6 md:relative'>
                    <div className='md:w-1/2'>
                        <div>
                            <h1>{title}</h1>
                            <p>As a leading manufacturer of home/residential elevators, we provide high-quality and cost-effective products to real estate developers and dealers around the world plan.The one-stop service from installation to maintenance can meet the mobility needs of various applications from residential to commercial and shopping malls to airports. Our solutions for your building range from highly standardized functions to fully customized elevators.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <img src={aboutprod1} alt="" />
                            <img src={aboutprod2} alt="" />
                            <img src={aboutprod3} alt="" />
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl formContent md:w-[40%]'>
                        <ContactForm
                            property={{ cap2: "Contact Us Now", type: { name: "*Name", email: "*Email", company: "Company", telephone: "Phone", textArea: "Message", product: "Products you want" } }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutProduct;
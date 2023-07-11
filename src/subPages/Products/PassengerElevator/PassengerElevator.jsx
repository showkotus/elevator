import ProductBanner from "../../../components/Products/ProductBanner/ProductBanner";
import bgImg from '../../../assets/Products/passengerBanner.jpg'
import AboutProduct from "../../../components/Products/AboutProduct/AboutProduct";
import UnderConstruction from "../../../components/UnderConstruction/UnderConstruction";
const PassengerElevator = () => {
    const data = {
        img: bgImg,
        title: "Leading Passenger Elevator Manufacturer",
        subTitle: "From China",
        description: "Hosting is a professional elevator manufacturer and passenger elevator supplier. We have a 300,000 square meter passenger elevator factory in China to produce and manufacture passenger elevators of various specifications.If you need to buy or represent our passenger elevator products, please click here to contact us!"
    }
    return (
        <div>
            <UnderConstruction/>
            {/* <ProductBanner prop ={data}/>
            <AboutProduct title={"Has Sold More than Million Elevators"}/> */}
        </div>
    );
};

export default PassengerElevator;
import './ProductBanner.css'
// eslint-disable-next-line react/prop-types
const ProductBanner = ({ prop }) => {
    // eslint-disable-next-line react/prop-types
    const { img, title, subTitle, description } = prop
    // console.log(title, subTitle)
    // console.log('this is bg img', img)
    return (
        <div className="marginTop">
            <div className="bg-cover bg-center w-full h-[82vh]"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="container h-full flex items-center">
                    <div className="w-full md:w-1/2 prodBannerContent">
                        <h1>{title} <br /> <span>{subTitle}</span></h1>
                        <p>{description}</p>
                        <button className="primaryButton rounded-lg py-4">Request a Quate Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
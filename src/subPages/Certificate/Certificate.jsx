import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import c1 from '../../assets/about/c1.jpg'
import c2 from '../../assets/about/c2.jpg'
import c3 from '../../assets/about/c3.jpg'
import c4 from '../../assets/about/c4.jpg'
import c5 from '../../assets/about/c5.jpg'
import c6 from '../../assets/about/c6.jpg'
import c7 from '../../assets/about/c7.jpg'
import c8 from '../../assets/about/c8.jpg'
import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";
import { useState } from "react";
// import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";


// eslint-disable-next-line react/prop-types
const Certificate = () => {
    const { setIsBanner } = useContext(NavbarContext)
    let [count, setCount] = useState(0)
    console.log("count down", count)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const certificates = [
        {
            id: 1,
            cert: c1
        },
        {
            id: 2,
            cert: c2
        },
        {
            id: 3,
            cert: c3
        },
        {
            id: 4,
            cert: c4
        },
        {
            id: 5,
            cert: c5
        },
        {
            id: 6,
            cert: c6
        },
        {
            id: 7,
            cert: c7
        },
        {
            id: 8,
            cert: c8
        },
    ]
    return (
        <div className={`marginTop`}>
            {/* <UnderConstruction/> */}
            <BannerBG title={"Certificate"} />
            <div className="container">
                <AboutButton text={'cer'} />
                {/* <div className="grid grid-cols-1 gap-12 my-12">
                    {
                        certificates.map(cert => <div key={cert.id}>
                            <img src={cert.cert} alt=""  className="w-full border "/>
                        </div>)
                    }
                </div> */}
                <div>
                    <img src={certificates[count].cert} alt="" />
                </div>
                <div className="flex gap-x-4 justify-center mt-8">
                    <button onClick={() => {
                        if (count === 0) {
                            setCount(certificates.length - 1)
                        } else {
                            setCount(count - 1)
                        }
                    }} className="uppercase bg-red-500 text-white hover:bg-black px-4 py-2 rounded-lg">Prev</button>
                    <button onClick={() => {
                        if (count === (certificates.length - 1)) {
                            setCount(0)
                        } else {
                            setCount(count + 1)
                        }
                    }} className="uppercase bg-red-500 text-white hover:bg-black px-4 py-2 rounded-lg">next</button>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
import AboutButton from "../../components/AboutButton/AboutButton";
import BannerBG from "../../components/BannerBG/BannerBG";
import { MdKeyboardArrowUp } from 'react-icons/md'
import './FAQ.css'
import { useContext, useState } from "react";
import { NavbarContext } from "../../context/ContextProvider";
// eslint-disable-next-line react/prop-types
const FAQ = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    // const [toggle, setToggle] = useState(false)

    const allFaq = [
        {
            id: 1,
            q: "The elevator wire rope will break?",
            a: "The elevator wire rope has special provisions of the state and requirements. Configuration not only for wire rope for elevator capsules and rated load, also considered the size of the traction, as a result, the tensile strength of wire rope greatly is greater than the weight of the lift, the safety factor of them are more than 12, usually equipped with more than four wire rope, elevator wire rope is generally not break at the same time."
        },
        {
            id: 2,
            q: "Is it dangerous that the power failure suddenly during the elevator running?",
            a: "If you meet the power failure or power line failure during the elevator running, the elevator will automatically stop, and it’s not dangerous. Because the elevator itself with electrical and mechanical safety device. In case of power failure, elevator brake can automatically operate, so that it can’t run. In addition, the power supply departments such as planned outage, prior notice, elevators or advance stopped running."
        },
        {
            id: 3,
            q: "When elevator closed will cause harm?",
            a: "In the elevator door closing process, if people or things touch the hall door, the door of elevator will automatically restart, and it’s safe. Because the door is provided with anti clamping switch, once the gate to touch the person or thing, this switching action make the elevator can not closed, and reopened, and then shut the door. In addition, closing force is required, and it will not hurt person."
        },
        {
            id: 4,
            q: "How is the elevator running?",
            a: "Elevator has a car and a counterweight, connect them through the wire rope, wire rope through the drive (tractor) traction drive, make the elevator cabin up and down on the elevator guide rail."
        }
    ]
    return (
        <div className={`marginTop`}>
            <BannerBG title={"FAQ"} />
            <div className="container">
                <AboutButton text={'faq'} />
                <div className="faq-container flex flex-col md:flex-row gap-x-[3%]">
                    <div className="w-full md:w-[67%]">

                        {
                            allFaq.map(f => <FaqDetails key={f.id} faq={f} />)
                        }
                    </div>
                    {/* <div className="w-full md:w-[30%]">
                        <h1>blog section</h1>
                        <h1>blog section</h1>
                        <h1>blog section</h1>
                        <h1>blog section</h1>
                        <h1>blog section</h1>
                        <h1>blog section</h1>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

// eslint-disable-next-line react/prop-types
const FaqDetails = ({ faq }) => {
    const [toggle, setToggle] = useState(false)
    return (<>
        <div className="dropdown-section border">
            <div className="question" onClick={() => setToggle(!toggle)}>
                <span className= {`${toggle ? 'activeSpan' : ''}`}><MdKeyboardArrowUp className="iconTab" size={32} /></span>
                <h3>{faq.q}</h3>
            </div>
            {
                <div className={`answer ${toggle ? 'activeAns' : ''}`}>
                    <p>{faq.a}</p>
                </div>
            }
        </div>
    </>)
}




import e1 from '../../assets/banner/e2.webp'
import e2 from '../../assets/banner/e1.webp'
import e3 from '../../assets/banner/e3.webp'
import e4 from '../../assets/banner/e4.webp'
import { useState } from 'react';
import './AllElevator.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import { FaBars } from 'react-icons/fa';
const AllElevator = () => {
    const [url, setUrl] = useState(e1)
    const [text, setText] = useState("Leading Passenger Elevator Manufacturer")
    const [showBtn, setShowBtn] = useState(false)
    return (
        <div className='my-12'>
            <div className='container'>
                <div className='allElevator-content'>
                    {/* for the small and medium devices  */}

                    <div className='button-container lg:hidden'>
                        <div onClick={() => setShowBtn(!showBtn)} className='flex justify-between py-2 px-4 border border-gray-500 rounded'>
                            {
                                !showBtn ?
                                    <FaBars size={24} />
                                    :
                                    <ImCross size={20} />
                            }
                            <h3 className='text-gray-500 text-[12px] flex items-center gap-x-6'><IoMdArrowDropdown size={24} /> <span>Menu</span></h3>
                        </div>
                        <div className={`all-button ${showBtn ? 'activeAllBtn' : ''}`}>
                            <button onClick={() => {
                                setUrl(e1)
                                setText("Leading Passenger Elevator Manufacturer")
                            }
                            } className={`${url == e1 ? "active" : ''}`}>Passenger Elavator</button>
                            <button onClick={() => {
                                setUrl(e2)
                                setText("Home/Residential Elevator Manufacturer&Supplier")
                            }
                            } className={`${url == e2 ? "active" : ''}`}>Home Elavator</button>
                            <button onClick={() => {
                                setUrl(e3)
                                setText("Panoramic/Observation Elevator Manufacturing & Solution")
                            }
                            } className={`${url == e3 ? "active" : ''}`}>Panoramic Elavator</button>
                            <button onClick={() => {
                                setUrl(e4)
                                setText("Escalators & Moving Walks Manufacturer&Supplier")
                            }
                            } className={`${url == e4 ? "active" : ''}`}>Escalator & Moving Walks</button>
                        </div>
                    </div>

                    <div className='hidden lg:flex items-center  justify-center gap-x-8'>
                        <button onClick={() => {
                            setUrl(e1)
                            setText("Leading Passenger Elevator Manufacturer")
                        }
                        } className={`${url == e1 ? "active" : ''}`}>Passenger Elavator</button>
                        <button onClick={() => {
                            setUrl(e2)
                            setText("Home/Residential Elevator Manufacturer&Supplier")
                        }
                        } className={`${url == e2 ? "active" : ''}`}>Home Elavator</button>
                        <button onClick={() => {
                            setUrl(e3)
                            setText("Panoramic/Observation Elevator Manufacturing & Solution")
                        }
                        } className={`${url == e3 ? "active" : ''}`}>Panoramic Elavator</button>
                        <button onClick={() => {
                            setUrl(e4)
                            setText("Escalators & Moving Walks Manufacturer&Supplier")
                        }
                        } className={`${url == e4 ? "active" : ''}`}>Escalator & Moving Walks</button>
                    </div>
                    <div className='my-8 relative text-container'>
                        <img src={url} alt="img of the elevator" />
                        <div className='absolute top-0 left-0 text-content'>
                            <h2>{text}</h2>
                            <AiOutlinePlus size={52} className='icon' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllElevator;
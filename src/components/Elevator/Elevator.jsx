import './Elevator.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
// import required modules
import { Navigation } from "swiper";
// import images 
import liftOne from '../../assets/banner/lift1.jpg'
import liftTwo from '../../assets/banner/lift2.jpg'
import liftThree from '../../assets/banner/lift3.jpg'
import liftFour from '../../assets/banner/lift4.jpg'
import liftFive from '../../assets/banner/lift5.jpeg'
import liftSix from '../../assets/banner/lift6.jpeg'

const Elevator = () => {
    return (
        <div>
            <div className='container'>
                <div className=''>
                    <h1 className='title'>Promoting the world renowned global brand OTIS  in Bangladesh</h1>

                    <div className='mt-12 elevatorContent'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            spaceBetween={30}
                            breakpoints={{
                                // For small devices like mobile phones
                                480: {
                                    slidesPerView: 1,
                                },
                                // For tablets
                                768: {
                                    slidesPerView: 2,
                                },
                                // Default for larger screens
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftOne} alt="" />
                                </div>
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Passenger Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftTwo} alt="" />
                                </div>
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Home Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftThree} alt="" />
                                </div>

                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Hospital Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftFour} alt="" />
                                </div>

                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Escalators & Moving Walks</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftFive} alt="" />
                                </div>

                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Freight Elevator</p>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className='overflow-hidden'>
                                    <img src={liftSix} alt="" />
                                </div>

                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Escalators & Moving Walks</p>
                            </SwiperSlide> */}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Elevator;
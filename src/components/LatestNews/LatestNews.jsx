import { useState } from 'react';
import './LatestNews.css'
import ltOne from '../../assets/banner/lat1.webp'
import ltTwo from '../../assets/banner/lt2.webp'
import ltThree from '../../assets/banner/lt3.webp'
import ltFour from '../../assets/banner/lt4.webp'
import n1 from '../../assets/banner/news1.webp'
import n2 from '../../assets/banner/news2.webp'
import n3 from '../../assets/banner/news3.webp'
import n4 from '../../assets/banner/news4.webp'
import Card from './Card';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
const LatestNews = () => {
    const [showTab, setShowTab] = useState("latest")
    const [showBtn, setShowBtn] = useState(false)
    const latest = [
        {
            img: ltOne,
            description: "The Ultimate Guide to Sightseeing Elevators: Discover the World's Most Breathtaking Views",
            date1: "20",
            date2: "Apr"
        },
        {
            img: ltTwo,
            description: "What Should Be the Dimensions of a Passenger Elevator?",
            date1: "06",
            date2: "Apr"
        },
        {
            img: ltThree,
            description: "Passenger Elevator: Introduction, Price, Selection",
            date1: "03",
            date2: "Feb"
        },
        {
            img: ltFour,
            description: "Elevator Modernization: Price Guide",
            date1: "24",
            date2: "Nov"
        },
    ]
    const news = [
        {
            img: n1,
            description: "List: Top 10 Elevator Companies in World(Updated 2023)",
            date1: "24",
            date2: "Jan"
        },
        {
            img: n2,
            description: "Top 10 Elevator Manufacturers in China 2023",
            date1: "07",
            date2: "Sep"
        },
        {
            img: n3,
            description: "German Elevator Exhibition",
            date1: "19",
            date2: "Nov"
        },
        {
            img: n4,
            description: "Turkey Elevator Exhibition",
            date1: "19",
            date2: "Mar"
        },
    ]
    return (
        <div className='my-16'>
            <div className='container'>
                <div className='content'>
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
                            <h2 onClick={() => setShowTab("latest")} className={`${showTab == 'latest' ? "active" : ''}`}>Latest</h2>
                            <h2 onClick={() => setShowTab("news")} className={`${showTab == 'news' ? "active" : ''}`}>Exhibition & News</h2>
                        </div>
                    </div>
                    
                    
                    <div className='hidden lg:flex gap-x-12 mb-8 items-center justify-center'>
                        <h2 onClick={() => setShowTab("latest")} className={`${showTab == 'latest' ? "active" : ''}`}>Latest</h2>
                        <h2 onClick={() => setShowTab("news")} className={`${showTab == 'news' ? "active" : ''}`}>Exhibition & News</h2>
                    </div>
                    <hr />
                    <div className='my-4'>
                        <div className={`latest-content ${showTab == 'latest' ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4`}>
                            {
                                latest.map((lt, index) => <Card key={index} prop={lt} />)
                            }
                        </div>
                        <div className={`news-content ${showTab == 'news' ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4`}>
                            {
                                news.map((n, index) => <Card key={index} prop={n} />)
                            }
                        </div>
                        <div className='text-center'>
                            <Link to={'/'} className={`bg-red-500 text-white mt-8 font-bold text-lg px-6 py-3 rounded ${showTab == "news" ? "inline-block" : "hidden"}`}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
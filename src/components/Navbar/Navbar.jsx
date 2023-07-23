
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import logo from '../../assets/navbar/navbarLogo.png'
import { FaBars } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import {ImCross} from 'react-icons/im'
import { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import { NavbarContext } from '../../context/ContextProvider';
import { BsTwitter } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
const Navbar = () => {
    const { isBanner } = useContext(NavbarContext)
    const [shownav, setShowNav] = useState(false)
    const [showNested, setShowNested] = useState(false)
    const [mdNav, setMdNav] = useState(false)
    // console.log(isBanner, setIsBanner)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY >= 65) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const menuList = <>
        <li><Link onClick={() => setMdNav(false)} to={'/'}>Home</Link></li>
        <li>
            <div className='flex gap-x-1 items-center'>
                <Link onClick={() => setMdNav(false)} to={'/company-profile'}>About</Link>
                <MdOutlineArrowDropDown onClick={() => {
                    if (showNested == 'about') {
                        setShowNested(false)
                    } else {
                        setShowNested('about')
                    }
                }} size={30} className="icon"/>
            </div>
            <ul className={`${showNested === 'about' ? 'activeNested' : ''}`}>
                <li><Link onClick={() => setMdNav(false)} to={'/company-profile'}>Company Profile</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/management-message'}>Managing Director&apos;s Message</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/certificate'}>Certificates</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/faq'}>FAQ</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/video'}>Video</Link></li>
            </ul>
        </li>
        <li>
            <div className='flex gap-x-1 items-center'>
                {/* <Link onClick={() => setMdNav(false)} to={'#'}>Products</Link> */}
                <Link onClick={() => setMdNav(false)} to={'/products'}>Products</Link>
                <MdOutlineArrowDropDown onClick={() => {
                    if (showNested == 'products') {
                        setShowNested(false)
                    } else {
                        setShowNested('products')
                    }
                }} size={30} className="icon"/>
            </div>

            <ul className={`${showNested === 'products' ? 'activeNested' : ''}`}>   
                <li><Link onClick={() => setMdNav(false)} to={'/passenger-elevator'}>Passenger Elevator</Link></li>
                {/* <li><Link onClick={() => setMdNav(false)} to={'#'}>Home Elevator</Link></li> */}
                <li><Link onClick={() => setMdNav(false)} to={'/home-elevator'}>Home Elevator</Link></li>
                {/* <li><Link onClick={() => setMdNav(false)} to={'#'}>Panoramic Elevator</Link></li> */}
                {/* <li><Link onClick={() => setMdNav(false)} to={'/panoramic-elevator'}>Panoramic Elevator</Link></li> */}
                {/* <li><Link onClick={() => setMdNav(false)} to={'#'}>Hospital Elevator</Link></li> */}
                <li><Link onClick={() => setMdNav(false)} to={'/hospital-elevator'}>Hospital Elevator</Link></li>
                {/* <li><Link onClick={() => setMdNav(false)} to={'#'}>Freight Elevator</Link></li> */}
                <li><Link onClick={() => setMdNav(false)} to={'/freight-elevator'}>Freight Elevator</Link></li>
                {/* <li><Link onClick={() => setMdNav(false)} to={'#'}>Escalators & Moving Walks</Link></li> */}
                <li><Link onClick={() => setMdNav(false)} to={'/escalators-moving-walks'}>Escalators & Moving Walks</Link></li>
            </ul>
        </li>
        <li><Link onClick={() => setMdNav(false)} to={'/modernization'}>Modernization</Link></li>
        <li>
            <div className='flex gap-x-1 items-center'>
                <Link onClick={() => setMdNav(false)} to={'/projects'}>Projects</Link>
                <MdOutlineArrowDropDown onClick={() => {
                    if (showNested == 'project') {
                        setShowNested(false)
                    } else {
                        setShowNested('project')
                    }
                }} size={30} className="icon"/>
            </div>

            <ul className={`${showNested === 'project' ? 'activeNested' : ''}`}>
                <li><Link onClick={() => setMdNav(false)} to={'/completed-projects'}>Completed Projects</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/ongoing-projects'}>Ongoing Projects</Link></li>
            </ul>
        </li>
        {/* <li><Link onClick={() => setMdNav(false)} to={"/download"}>Download</Link></li> */}
        <li>
            {/* <div className='flex gap-x-1 items-center'>
                <Link onClick={() => setMdNav(false)} to={'/blog'}>Blog</Link>
                <MdOutlineArrowDropDown onClick={() => {
                    if (showNested == 'blog') {
                        setShowNested(false)
                    } else {
                        setShowNested('blog')
                    }
                }} size={30} className="icon"/>
            </div> */}

            <ul className={`${showNested === 'blog' ? 'activeNested' : ''}`}>
                <li><Link onClick={() => setMdNav(false)} to={'/'}>Exhibition and news</Link></li>
                <li><Link onClick={() => setMdNav(false)} to={'/'}>Articles</Link></li>
            </ul>

        </li>
        {/* <li><Link onClick={() => setMdNav(false)} to={"/agent"}>Agent</Link></li> */}
        <li><Link onClick={() => setMdNav(false)} to={"/clients"}>Clients</Link></li>
    </>
    return (
        <div className={`fixed top-0 left-0 w-full z-10 ${isBanner && !shownav ? 'bg-white lg:bg-transparent' : 'shadow-lg bg-white'}`}>
            <UpperNav prop={{ shownav, isBanner }} />
            <header className='container'>
                <nav className={`custom-nav  ${isBanner && !shownav ? 'bg-white lg:bg-transparent hoverEffect' : 'bg-white'}`}>
                    <div>
                        <Link onClick={() => setMdNav(false)} to={'/'}><img src={logo} alt="logo of the website" className='h-[100px] w-[156px]' /></Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul>
                            {menuList}
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <Link className='primaryButton  rounded-xl md:rounded-2xl' to={'/contact'}>Contact Us</Link>
                        {!mdNav && <FaBars onClick={() => setMdNav(true)} size={24} className='lg:hidden cursor-pointer'/>}
                        {mdNav && <ImCross onClick={() => setMdNav(false)} size={24} className='lg:hidden cursor-pointer'/>}
                        
                    </div>
                </nav>
                <div className={`lg:hidden responsiveNav ${mdNav ? 'activeNavbar' : ''} `}>
                    <ul>
                        {menuList}
                    </ul>
                    <div className='flex items-center justify-center gap-x-4 my-6'>
                            <CiFacebook size={34} className='hover:text-red-500 cursor-pointer icon' />
                            <BsTwitter size={34} className='hover:text-red-500 cursor-pointer icon' />
                            <AiOutlineInstagram size={34} className='hover:text-red-500 cursor-pointer icon' />
                            <AiOutlineYoutube size={34} className='hover:text-red-500 cursor-pointer icon' />
                        </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
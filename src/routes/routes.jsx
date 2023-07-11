import { createBrowserRouter } from "react-router-dom";
import Loyout from "../layouts/Loyout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Modernization from "../pages/Modernization/Modernization";
import Projects from "../pages/Projects/Projects";
import Download from "../pages/Download/Download";
import Blog from "../pages/Blog/Blog";
import Agent from "../pages/Agent/Agent";
import Contact from "../pages/Contact/Contact";
import VideoDetails from "../subPages/ShowVideo/VideoDetails";
import CompanyProfile from "../subPages/CompanyProfile/CompanyProfile";
import FactoryView from "../subPages/FactoryView/FactoryView";
import Certificate from "../subPages/Certificate/Certificate";
import FAQ from "../subPages/FAQ/FAQ";
import ShowVideo from "../subPages/ShowVideo/ShowVideo";
import PassengerElevator from "../subPages/Products/PassengerElevator/PassengerElevator";
import HomeElevator from "../subPages/Products/HomeElevator/HomeElevator";
import PanoramicElevator from "../subPages/Products/PanoramicElevator/PanoramicElevator";
import HospitalElevator from "../subPages/Products/HospitalElevator/HospitalElevator";
import FreightElevator from "../subPages/Products/FreightElevator/FreightElevator";
import MovingWalks from "../subPages/Products/MovingWalks/MovingWalks";
import Completed from "../subPages/Projects/Completed/Completed";
import OnGoing from "../subPages/Projects/OnGoing/OnGoing";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Loyout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/company-profile",
                element:<CompanyProfile/>
            },
            {
                path:"/factory-view",
                element:<FactoryView/>
            },
            {
                path:"/certificate",
                element:<Certificate/>
            },
            {
                path:"/faq",
                element:<FAQ/>
            },
            {
                path:"/video",
                element:<ShowVideo/>
            },
            
            {
                path:'/products',
                element: <Product/>
            },
            {
                path:"/video/:id",
                element: <VideoDetails/> 
            },
            {
                path:'/modernization',
                element:<Modernization/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/download",
                element:<Download/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/agent",
                element:<Agent/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: '/passenger-elevator',
                element: <PassengerElevator/>
            },
            {
                path: '/home-elevator',
                element: <HomeElevator/>
            },
            {
                path: '/panoramic-elevator',
                element: <PanoramicElevator/>
            },
            {
                path: '/hospital-elevator',
                element: <HospitalElevator/>
            },
            {
                path: '/freight-elevator',
                element: <FreightElevator/>
            },
            {
                path: '/escalators-moving-walks',
                element: <MovingWalks/>
            },
            {
                path:"/completed-projects",
                element:<Completed/>
            },
            {
                path:"/ongoing-projects",
                element:<OnGoing/>
            }
        ]
    }
])

export default router 
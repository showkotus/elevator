import { useContext } from "react";
import { NavbarContext } from "../../../context/ContextProvider";
import './ProjectView.css'
import img1 from '../../../assets/projects/Air Force-min.jpg'
import img2 from '../../../assets/projects/Ananta-min.jpg'
import img3 from '../../../assets/projects/Arla Food-min.jpg'
import img4 from '../../../assets/projects/Arla food2-min.jpg'
import img5 from '../../../assets/projects/Arla-Foods-1-min.jpg'
import img6 from '../../../assets/projects/Asgar Ali Hospital-min.jpg'
import img7 from '../../../assets/projects/Liwayway-min.jpg'
import img8 from '../../../assets/projects/Liwayway2-min.jpg'
import img9 from '../../../assets/projects/Liwayway3-min.jpg'
import img10 from '../../../assets/projects/Meghna Noodles and Biscuit factory ltd.-min.jpg'
import img11 from '../../../assets/projects/Meghna pulp and papers ltd-min.jpg'
import img12 from '../../../assets/projects/Meghna Suger Refinery Limited-min.jpg'
import img13 from '../../../assets/projects/Rupayan FPAB-min.jpg'
import img14 from '../../../assets/projects/Rupayan FPAB1-min.jpg'
import img15 from '../../../assets/projects/SepcoIII-min.jpg'
import img16 from '../../../assets/projects/Tanveer food 1-min.jpg'
import img17 from '../../../assets/projects/Tanvir-Food-Ltd-min.jpg'
import img18 from '../../../assets/projects/youngone-cepz-ltd-min.jpg'
import img19 from '../../../assets/projects/Youngone1-min.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "grid", placeItems:"center", background: "black",width:"2rem", height:"2rem", borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
const ProjectView = () => {
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const projects = [
        {
            img: img1,
            name: "Air Force"
        },
        {
            img: img2,
            name: "Ananta"
        },
        {
            img: img3,
            name: "Arla Food"
        },
        {
            img: img5,
            name: "Arla-Foods-1"
        },
        {
            img: img4,
            name: "Arla food-2"
        },
        {
            img: img6,
            name: "Asgar Ali Hospital"
        },
        {
            img: img7,
            name: "Liwayway"
        },
        {
            img: img8,
            name: "Liwayway-2"
        },
        {
            img: img9,
            name: "Liwayway-3"
        },
        {
            img: img10,
            name: "Meghna Noodles and Biscuit factory ltd"
        },
        {
            img: img11,
            name: "Meghna pulp and papers ltd"
        },
        {
            img: img12,
            name: "Meghna Suger Refinery Limited"
        },
        {
            img: img13,
            name: "Rupayan FPAB"
        },
        {
            img: img14,
            name: "Rupayan FPAB-1"
        },
        {
            img: img15,
            name: "SepcoIII"
        },
        {
            img: img16,
            name: "Tanveer food-1"
        },
        {
            img: img17,
            name: "Tanvir-Food-Ltd"
        },
        {
            img: img18,
            name: "Youngone-cepz-ltd"
        },
        {
            img: img19,
            name: "Youngone-1"
        },
    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow />
      };
    return (
        <div className='marginTop'>
            <div className="container">
                <div className="px-8">
                <Slider {...settings} className="p-[1rem]">
                    {
                        projects?.map((project, index) => <div key={index} className="relative">
                            <img src={project.img} alt="" className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"/>
                            <p className="absolute left-[1rem] bottom-[1rem] font-semibold text-sm md:text-lg lg:text-xl text-white uppercase p-2 md:p-8 bg-[rgba(0,0,0,0.8)]">{project.name}</p>
                        </div>)
                    }
                </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
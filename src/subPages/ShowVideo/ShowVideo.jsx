import { useContext, useEffect, useState } from "react";
import { AiOutlineYoutube } from 'react-icons/ai'
import BannerBG from "../../components/BannerBG/BannerBG";
import AboutButton from "../../components/AboutButton/AboutButton";
import './ShowVideo.css'
import { NavbarContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ShowVideo = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    // const [videos, setVides] = useState([])
    // useEffect(() => {
    //     fetch("videos.json")
    //         .then(res => res.json())
    //         .then(data => setVides(data))
    // }, [])
    const videos = [
        "https://www.youtube.com/embed/vvhqPOu5vok",
        "https://www.youtube.com/embed/hcN7pbpujMk",
        "https://www.youtube.com/embed/003DiozGuIY",
        "https://www.youtube.com/embed/qroZCbIV9hs",
        "https://www.youtube.com/embed/PuPS8EKHIsE",
        "https://www.youtube.com/embed/aTIOJaLfyHs",
    ]

    console.log(videos)
    return (
        <div className="marginTop">
            <BannerBG title={"Video"}/>
            <div className="container">
                <AboutButton text={"video"}/>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 video-container`}>
                    {/* {
                        videos.map((video) => <Link state={{video}} to={`/video/${video.id}`} key={video.id}>
                            <div className="relative img-section">
                                <img src={video.img} alt="" className="drop-shadow-lg" />
                                <AiOutlineYoutube size={44} className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 icon" />
                            </div>
                            <h4>{video.name}</h4>
                        </Link>)
                    } */}
                    {
                        videos.map((video, index) => <iframe key={index} src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >)
                    }
                </div>
            </div>
        </div>

    );
};

export default ShowVideo;
import { useContext} from "react";
import BannerBG from "../../components/BannerBG/BannerBG";
import AboutButton from "../../components/AboutButton/AboutButton";
import './ShowVideo.css'
import { NavbarContext } from "../../context/ContextProvider";
// eslint-disable-next-line react/prop-types
const ShowVideo = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    const videos = [
        "https://www.youtube.com/embed/vvhqPOu5vok?rel=0&showinfo=0",
        "https://www.youtube.com/embed/hcN7pbpujMk?rel=0&showinfo=0",
        "https://www.youtube.com/embed/003DiozGuIY?rel=0&showinfo=0",
        "https://www.youtube.com/embed/qroZCbIV9hs?rel=0&showinfo=0",
        "https://www.youtube.com/embed/PuPS8EKHIsE?rel=0&showinfo=0",
        "https://www.youtube.com/embed/aTIOJaLfyHs?rel=0&showinfo=0",
    ]
    return (
        <div className="marginTop">
            <BannerBG title={"Video"}/>
            <div className="container">
                <AboutButton text={"video"}/>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 video-container`}>
                    {
                        videos.map((video, index) => <iframe key={index} src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >)
                    }
                </div>
            </div>
        </div>

    );
};

export default ShowVideo;
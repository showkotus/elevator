import { useLocation } from "react-router-dom";

const VideoDetails = () => {
    const location = useLocation()
    const video = location.state.video

    return (
        <div className="marginTop">
            <div className="container">
                <div className="video-details">
                    <h1>{video.name}</h1>
                    <div className="my-12 text-center">
                        <iframe src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>{video.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
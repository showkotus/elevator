import { useState } from 'react';
import './Video.css'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
const Video = () => {
    let [url, setUrl] = useState("https://www.youtube.com/embed/vvhqPOu5vok")
    let [index, setIndex] = useState(0)
    const videos = [
        "https://www.youtube.com/embed/vvhqPOu5vok?rel=0",
        "https://www.youtube.com/embed/hcN7pbpujMk?rel=0",
        "https://www.youtube.com/embed/003DiozGuIY?rel=0",
        "https://www.youtube.com/embed/qroZCbIV9hs?rel=0",
        "https://www.youtube.com/embed/PuPS8EKHIsE?rel=0",
        "https://www.youtube.com/embed/aTIOJaLfyHs?rel=0",
    ]

    return (
        <div className="my-8 md:my-12">
            <div className="container">
                <div className="video-content">
                    <h1 className="primaryTitle">Video</h1>
                    <div className='md-video-content p-4 mt-8 mb-4 lg:hidden'>
                        <div>
                            <iframe src={videos[index]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <button onClick={() => {
                                if (index == 0) {
                                    setIndex(videos.length - 1)
                                } else {
                                    setIndex(index - 1)
                                }
                            }}><IoIosArrowBack size={22} /></button>
                            <button onClick={() => {
                                if (index == (videos.length - 1)) {
                                    setIndex(0)
                                } else {
                                    setIndex(index + 1)
                                }
                            }}><IoIosArrowForward size={22} /></button>
                        </div>
                    </div>
                    <div className='hidden lg:flex gap-x-4 items-center mt-12 '>
                        <div className='w-[20%]'>
                            <div onClick={() => setUrl("https://www.youtube.com/embed/vvhqPOu5vok?rel=0")} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/vvhqPOu5vok?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Elevator Company Otis Gets Lift From Technology </h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/003DiozGuIY?rel=0')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg my-8 ${url == "https://www.youtube.com/embed/003DiozGuIY?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>OTIS Elevator Global Major Projects</h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/qroZCbIV9hs?rel=0')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/qroZCbIV9hs?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Welcome to Tomorrow</h3>
                            </div>
                        </div>
                        <div>
                            <iframe width="660" height="400" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe >
                        </div>
                        <div className='w-[20%]'>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/PuPS8EKHIsE?rel=0')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/PuPS8EKHIsE?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>Gen3™ elevator: a platform for possibility</h3>
                            </div>
                            <div onClick={() => setUrl("https://www.youtube.com/embed/hcN7pbpujMk?rel=0")} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg my-8 ${url == "https://www.youtube.com/embed/hcN7pbpujMk?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>OTIS GeN2 Technology </h3>
                            </div>
                            <div onClick={() => setUrl('https://www.youtube.com/embed/aTIOJaLfyHs?rel=0')} className={`p-4 flex items-start gap-x-3 cursor-pointer rounded-lg ${url == "https://www.youtube.com/embed/aTIOJaLfyHs?rel=0" ? 'activeVideo' : ''}`}>
                                <AiFillPlayCircle size={32} />
                                <h3 className='text-[.9rem]'>OTIS: Say hello to Future, Gen3</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
import { useState } from "react";
import "./OnGoing.css"
import { useEffect } from "react";
import ShowProjects from "../../../components/ShowProjects/ShowProjects";
import { InfinitySpin } from 'react-loader-spinner'
const OnGoing = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('ongoingProjects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div className='marginTop'>
            <div className="container">
                <div className="w-full h-[60vh] grid place-items-center">
                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />
                </div>
            </div>
        </div>
    }
    return (
        <div className='marginTop'>
            <div className="container">
                <div className="ongoing_container">
                    <ShowProjects data={{ projects: projects, title: "We are working on some prestigious projects which are being presented" }} />
                </div>
            </div>
        </div>
    );
};

export default OnGoing;
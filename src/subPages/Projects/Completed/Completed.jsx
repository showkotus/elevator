import { InfinitySpin } from 'react-loader-spinner';
import { useState } from 'react';
import { useContext } from 'react';
import { NavbarContext } from '../../../context/ContextProvider';
import { useEffect } from 'react';
import ShowProjects from '../../../components/ShowProjects/ShowProjects';

const Completed = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    useEffect(() => {
        fetch('completedProjects.json')
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
                    <ShowProjects data={{ projects: projects, title: "Elevator Engineers Ltd. working with utmost sincerity and client’s satisfaction. We are proud to present some of our prestigious completed projects." }} />
                </div>
            </div>
        </div>
    );
};


export default Completed;
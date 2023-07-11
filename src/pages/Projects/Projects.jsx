import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";

const Projects = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div>
            <h1>this is our projects page</h1>
        </div>
    );
};

export default Projects;
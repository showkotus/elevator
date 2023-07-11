import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";

const Download = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div>
            <h1>all documents download from here</h1>
        </div>
    );
};

export default Download;
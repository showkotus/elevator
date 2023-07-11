import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";

const Blog = () => {
    const {setIsBanner} = useContext(NavbarContext)
    function changeNav(){
        setIsBanner(false)
    }
    changeNav()
    return (
        <div>
            <h1>this is our blog</h1>
        </div>
    );
};

export default Blog;
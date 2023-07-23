// import AllElevator from "../../components/AllElevator/AllElevator";
// import AllElevator from "../../components/AllElevator/AllElevator";
import Banner from "../../components/Banner/Banner";
import Elevator from "../../components/Elevator/Elevator";
import ElevatorMenu from "../../components/ElevatorMenu/ElevatorMenu";
// import LatestNews from "../../components/LatestNews/LatestNews";
import Quote from "../../components/Quote/Quote";
// import Shape from "../../components/Shape/Shape";
import Video from "../../components/Video/Video";

const Home = () => {
    return (
        <div>
            <Banner />
            <ElevatorMenu />
            {/* <Shape/> */}
            <Elevator/>
            {/* <AllElevator/> */}
            <Video/>
            {/* <LatestNews/> */}
            <Quote />
        </div>
    );
};

export default Home;
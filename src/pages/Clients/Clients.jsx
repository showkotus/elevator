import { useContext } from "react";
import { NavbarContext } from "../../context/ContextProvider";
import c1 from '../../assets/clients/c1.jpg'
import c2 from '../../assets/clients/c2.png'
import c3 from '../../assets/clients/c3.jpg'
import c4 from '../../assets/clients/c4.png'
import c5 from '../../assets/clients/c5.png'
import c6 from '../../assets/clients/c6.png'
import c7 from '../../assets/clients/c7.jpg'
import c8 from '../../assets/clients/c8.jpg'
import c9 from '../../assets/clients/c9.jpg'
import c10 from '../../assets/clients/c10.jpg'
import c11 from '../../assets/clients/c11.jpg'
import c12 from '../../assets/clients/c12.gif'
import c13 from '../../assets/clients/c13.jpg'
import c14 from '../../assets/clients/c14.png'
import c15 from '../../assets/clients/c15.png'
import c16 from '../../assets/clients/c16.jpg'
import c17 from '../../assets/clients/c17.png'
import c18 from '../../assets/clients/c18.png'
import c19 from '../../assets/clients/c19.jpg'
import c20 from '../../assets/clients/c20.jpg'
import c21 from '../../assets/clients/c21.png'
import c22 from '../../assets/clients/c22.png'
import c23 from '../../assets/clients/c23.png'
import c24 from '../../assets/clients/c24.jpg'
import c25 from '../../assets/clients/c25.jpg'
import c26 from '../../assets/clients/c26.png'
import c27 from '../../assets/clients/c27.png'
import c28 from '../../assets/clients/c28.jpg'
import c29 from '../../assets/clients/c29.jpg'
import c30 from '../../assets/clients/c30.png'
import c31 from '../../assets/clients/c31.png'
import c32 from '../../assets/clients/c32.jpg'
import c33 from '../../assets/clients/c33.jpg'
import c34 from '../../assets/clients/c34.png'
import c35 from '../../assets/clients/c35.jpg'
const Clients = () => {
    const { setIsBanner } = useContext(NavbarContext)
    function changeNav() {
        setIsBanner(false)
    }
    changeNav()
    const clients = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, 
        c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31,c32,c33, c34,c35 ]
    return (
        <div className="marginTop">
            <div className="container">
                <h1 className="text-center font-bold text-2xl mb-4 mt-2 text-red-500">Our Corporate Clients</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
                    {
                        clients.map((client, index) => <img key={index} src={client} className="w-full"/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Clients;
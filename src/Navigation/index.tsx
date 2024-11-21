import {Link} from "react-router-dom";
import {IoHome, IoPerson, IoSearch} from "react-icons/io5";


export default function Navigation() {
    return (
        <div id={"navigation"} className={"container-md z-2"}>
            <nav className={"nav flex-column position-fixed top-0 bottom-0 p-5" }>
                <img src={"logo192.png"} className={"align-self-center mb-5"} width={"72px"} alt={"logo"}/>

                <Link to={"/Home"} className={"menu-item nav-link text-black mb-4"}>
                    <IoHome/> &ensp; Home </Link>
                <Link to={"/Search"} className={"menu-item nav-link text-black mb-4"}>
                    <IoSearch/> &ensp; Search </Link>
                <Link to={"/Profile"} className={"menu-item nav-link text-black mb-4"}>
                    <IoPerson/> &ensp; Profile </Link>
            </nav>

        </div>
    )
}
import Navbar from "../components/Navbar.jsx";
import ContentContainer from "../components/ContentContainer.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div className="h-full bg-gray-100 p-5 flex flex-col gap-[2%]">
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;
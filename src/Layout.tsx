import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    const [theme, setTheme] = useState("frappe");

    return (
        <div className={theme + " w-screen h-screen"}>
            <nav className="h-[5%] bg-crust text-center space-x-16 leading-10 items-center">
                <NavLink to="/" className="text-lavender hover:text-blue">Home</NavLink>
                <NavLink to="languages" className="text-lavender hover:text-blue">Languages</NavLink>
                <NavLink to="games" className="text-lavender hover:text-blue">Games</NavLink>
                <NavLink to="about" className="text-lavender hover:text-blue">About</NavLink>
            </nav>

            <Outlet/>

            <div className="h-[5%] bg-crust w-screen"></div>
        </div>
    )
}

export default Layout
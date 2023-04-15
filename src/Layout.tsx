import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    const [theme, setTheme] = useState("frappe");

    return (
        <div className={theme + " w-screen h-screen"}>
            <nav className="h-[5%] pt-[1.5%] sm:pt-[0.5%] md:pt-[0.5%] lg:pt-[0.5%] bg-crust text-center space-x-6 sm:space-x-6 md:space-x-8 lg:space-x-16">
                <NavLink to="/" className="text-lavender hover:text-blue">Home</NavLink>
                <NavLink to="languages" className="text-lavender hover:text-blue">Languages</NavLink>
                <NavLink to="games" className="text-lavender hover:text-blue">Games</NavLink>
                <NavLink to="extras" className="text-lavender hover:text-blue">Extras</NavLink>
            </nav>

            <Outlet/>

            <div className="h-[5%] sm:h-[15%] md:h-[15%] lg:h-[15%] bg-crust"></div>
        </div>
    )
}

export default Layout
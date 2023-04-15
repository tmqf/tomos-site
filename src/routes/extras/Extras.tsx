import React from "react";
import { Helmet } from "react-helmet";

function Extras() {
    return (
        <div className="About bg-base text-white sm:h-[241%] md:h-[169%] lg:h-[169%]">

            <Helmet><title>tomos - Extras</title></Helmet>

            <div className="grid grid-rows-[50em_minmax(50em,_1fr)] text-lavender">

                {/* FIRST DIV */}
                <div className="flex flex-row items-stretch flex-col sm:flex-col md:flex-col lg:flex-row">
                    <div className="w-screen sm:w-screen pt-[25px] text-[5.5em] md:w-screen lg:w-[55%] font-['Verdana'] text-center sm:pt-[50px] md:pt-[50px] lg:pt-[220px] select-none sm:text-[9em] md:text-[9em] lg:text-[12em]">

                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">e</span>
                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">x</span>
                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">t</span>
                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">r</span>
                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">a</span>
                        <span className="font-bold hover:text-[1.5em] hover:animate-borderColour hover:transition-all duration-500">s</span>

                    </div>
                    <div className="w-screen sm:w-screen md:w-screen lg:w-[45%] select-none text-center">
                        <p className="text-[0.6em] sm:text-[0.7em] md:text-[0.73em] lg:text-[1em] pt-[0%] sm:pt-[1%] md:pt-[1%] lg:pt-[1%]">
                            ⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⢰⠏⠛⢯⡙⠳⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⢹⣇⣠⠿⣆⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠶⠛⣩⡿⠛⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⣼⠀⠀⠀⠙⢦⡀⠀⠙⠳⣤⡀⠀⠀⣀⣠⡤⠶⠶⠚⠁⠀⠚⠋⠀⠀⠿⣤⣀⡀⠀⠀⣠⡶⠛⠁⠀⣠⠞⠁⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀
                            ⡏⠀⠀⠀⠀⠀⠻⢦⡀⠀⢀⡽⠷⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⢿⣅⠀⠀⣠⠞⠁⠀⠀⠀⠀⢺⡇⠀⠀⠀⠀⠀⠀⠀⠀
                            ⡇⠀⠀⠀⠀⠀⠀⢈⣿⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣾⡋⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
                            ⣿⠀⠀⠀⠀⠀⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣆⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
                            ⢹⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠜⣦⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠸⣇⠀⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠸⣇⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⢻⡄⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠁⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⢻⣀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠈⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡀⢿⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⢠⡟⠀⠀⠀⠀⣶⣶⠿⠿⠿⢷⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣾⠿⠿⠿⢷⣶⡆⠀⠀⡇⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⢀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠀⠀⠀⢠⣤⣤⠀⠀⠀⠘⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠸⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠘⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢈⣹⡏⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠓⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⠞⠻⢓⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁⠀⣠⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⢷⡟⠋⠀⠀⠀⠀⢀⣀⣠⣤⣤⣤⠤⠤⠤⢼⠇⠀⠈⣿⠤⢤⣤⣤⣤⣤⣤⣀⣀⠀⠀⠉⠀⠀⠛⣶⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠙⢶⣀⠀⢾⣯⣉⣁⡒⠲⠶⠤⠭⣉⣵⣿⣷⣤⣶⣿⣦⣀⠀⠀⠀⢀⣀⣉⣉⣽⣿⠇⢀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠉⠛⠦⢽⣦⡀⠉⠉⠙⠛⠛⠛⠛⢻⡟⠛⠛⣿⠛⠛⠛⠛⠛⠉⠉⠁⢀⣿⠥⠖⠋⠀⠀⠀⢀⣶⠛⠉⠙⠛⢦⣀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⣤⠞⠛⣻⣦⡀⠀⠀⠀⠀⠀⢸⠇⠘⡦⣿⠀⠀⠀⠀⠀⠀⣴⣞⡛⠛⢦⡀⠀⠀⠀⠀⠸⣧⠀⠀⠀⠲⣄⠙⢷⡄⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠉⠉⣷⡀⠀⠀⢀⣤⣼⠄⠀⣇⣿⣤⣤⣤⣀⣀⣸⠉⠈⠉⠀⠀⢻⡄⠀⠀⠀⠀⠘⠷⣄⠀⠀⠈⢳⡀⢹⡄⠀
                            ⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠰⠶⣾⣯⠀⠀⢀⣷⠈⡁⣀⠉⢉⠀⠀⣀⣠⣭⣿⠶⠦⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠉⢦⡀⠀⠀⢳⡀⢻⡄
                            ⠀⠀⠀⠀⠀⠀⠀⠈⢷⣄⣀⣀⣴⠏⣿⠀⠀⢸⡏⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠘⢧⣀⡀⣀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⠀⠇⠀⡇
                            ⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠙⡏⣿⠀⢺⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠋⡏⠙⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⣿
                            ⠀⠀⠀⠀⠀⠀⠀⢀⣸⡇⠀⣇⢸⡀⢸⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⢸⠃⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⡿
                            ⠀⠀⠀⠀⠀⣴⣶⣿⣿⣷⣦⣻⠈⡇⢸⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⢸⣠⣶⡟⣿⡷⣦⡀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⢠⡇
                            ⠀⠀⠀⠀⣾⣻⣸⣿⣿⣿⠟⢿⡄⣧⠀⡇⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⣾⠋⣿⣿⣿⣿⣾⣻⠀⠀⠀⠀⣠⡾⠃⠀⠀⠀⢠⡟⠀
                            ⠀⠀⠀⠀⣿⢻⣻⣿⡿⠛⢦⣼⡇⢹⠀⡇⠀⠀⣿⣿⣦⠀⢀⣤⣄⢀⣴⣶⡀⢸⠀⣧⣴⠾⢷⣍⣿⣿⢿⣄⡤⠶⠛⠁⠀⠀⠀⢀⣴⠏⠀⠀
                            ⠀⠀⠀⠀⠸⣧⠉⠘⣇⣀⣼⠟⣷⢸⠀⣿⡄⣀⠻⢿⣿⣷⣾⣿⣿⣛⠿⠿⠇⡼⢀⡟⢷⣄⣀⡏⠉⢡⡟⠀⠀⠀⠀⠀⢀⣠⠶⠋⠁⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠘⢦⡀⠈⠉⠁⠀⣿⠈⣇⣿⡟⢿⣷⣼⣿⣿⡋⢻⣿⣿⡇⠀⠀⡇⢸⠃⠀⠉⠉⠀⣰⣯⣤⣤⣤⠤⠖⠚⠉⠁⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠈⢳⣄⠀⠀⠀⣿⡄⠻⣌⡑⠾⠟⠻⣿⡿⠃⠹⣿⣿⠃⣀⡾⠃⣾⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⣄⠀⠘⣷⣄⣈⠉⠓⠶⠶⠤⠤⠤⠶⠶⠖⠋⢁⣀⣴⡟⠀⢀⣴⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠁⠀⠈⠙⠛⠓⠒⠶⠶⠶⠒⠒⠛⠛⠉⠁⠈⠙⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        </p>
                    </div>
                </div>


                {/* SECOND DIV */}
                <div className="bg-surface1 flex flex-col flex-wrap item-stretch">
                    <div className="h-[90%]">

                        <div className="h-[30%] w-screen">
                            <p className="text-center text-[5em]">Currently in development</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Extras
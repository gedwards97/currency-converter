import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../store/context';

// Start component on UI homepage 
export const Start = () => {
    // Global state defined
    const {state} = useContext(Context);
    console.log("START STATE")
    console.log(state)
    return (
        // Component container
        <div className="bg-blue-500 h-screen flex flex-col
        justify-center items-center">
            {/* UI homepage title - responsive to change in browser dimensions */}
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-yellow-400 mb-14">
                Currency Converter
            </h1>
            {/* Link which launches the application to the form page */}
            <div className="start">
                <Link to="/converter" className="lg:px-12 lg:py-4 lg:text-3xl md:px-10 md:py-3 md:text-xl sm:px-8 sm:py-2 sm:text-sm bg-yellow-400 text-white rounded-full 
                transition duration-300 ease-in-out hover:bg-white hover:text-yellow-400 flex items-center">
                Start
                {/* Play button */}
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-4 sm:w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </Link>
            </div>
            

        </div>
    )
}


export default Start


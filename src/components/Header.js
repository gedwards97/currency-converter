import React from 'react';
// Link import used for routing
import { Link } from 'react-router-dom';

// UI header, used consistently throughout the application
const Header = () => {
    return (
        // Header container - responsive to lg/md/sm screens
        <div className='flex items-center lg:h-16 md:h-14 sm:h-12 text-yellow-400 relative font-mono justify-between'>
            {/* Home button which redirects the user to the application's homepage */}
            <Link to="/" className='lg:pl-8 md:pl-7 sm:pl-6 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-8 sm:w-8 transition duration-500 ease-in-out 
                hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </Link>
            {/* Company name - displayed in the top left */}
            <h1 className='lg:pr-8 lg:text-3xl md:pr-7 md:text-2xl sm:pr-6 sm:text-xl'>Big Company</h1>
        </div>

        
    )
}

export default Header

import React from 'react'

// Footer which is used at the base consistently throughout the application
const Footer = () => {
    return (
        // Simple div containing footer text - resposive to lg/md/sm screen sizes
        <div className="flex justify-center items-center lg:h-16 md:h-14 sm:h-12 bg-blue-500 text-yellow-400
        lg:text-xl md:text-l sm:text-md">
            <p>Copyright &copy; Big Company All rights reserved. </p>
        </div>
    )
}

export default Footer

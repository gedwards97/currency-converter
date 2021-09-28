import React from 'react'

// FailedExchange component, routed to if  the application is unsuccessful in retrieving exchange rate (output.js) 
export const FailedExchange = () => {
    return (
        // FailedExchange cntainer - text resposive to lg/md/sm screen sizes
        <div className="h-screen bg-blue-500 h-screen flex flex-col justify-center items-center text-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-yellow-400  mb-14">
                Sorry, This Exchange Isn't Available Right Now.
            </h1>
        </div>
    )
}

export default FailedExchange

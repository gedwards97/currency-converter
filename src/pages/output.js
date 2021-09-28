import React, { useContext, useEffect } from 'react'
import Context from '../store/context';
import CURR_URL from "../constants/index";
import {Redirect} from 'react-router-dom'


export const Output = () => {
    
    // Accessing global state for the output page
    const {state, actions} = useContext(Context);
    
    console.log("OUTPUT STATE")
    console.log(state)

    // Retrieve live exchange rate for chosen currency 
    useEffect(() => {
        setTimeout(() => {
            fetch(CURR_URL)
            .then(res => res.json())
            .then(data => {
                actions({
                    // Utilizing usdAmount and selectedCurrency states selected from form to retireve exchangeRate and calculate converted amount
                    type:"setState", payload: {...state, exchangeRate: data.quotes[state.selectedCurrency],
                    convertedAmount: state.usdAmount*data.quotes[state.selectedCurrency]}
                })    
            })
            // TODO - Return boolean which, if true, redirects UI to exchange error page
            .catch(err =>{
                console.log(err.message)
            })
        },1000)
    }, []);



    if (typeof(state.exchangeRate) !== 'number' ) {
        // Failed to retrieve exchange rate - user is redirected to the error component
        console.log("REDIRECTING")
        return <Redirect to="/exchange-error" />
    } else {
        return (
            // Successful conversion outputted
            <div className="bg-blue-500 h-screen flex flex-col
            justify-center items-center">
                {/* Dynamic currency and exchange rate outputted, based on the user's chosen inputs */}
                <h1 className='text-5xl text-yellow-400 py-10'>USD to {state.selectedCurrency.replace("USD", "")} Exchange Rate = {state.exchangeRate.toPrecision(3)}</h1>
                <div className="flex flex-row space-x-20">
                    
                    {/* Converted amount displays (standard and 10% bonus for Big Company employees) */}
                    <div className="flex flex-col bg-white justify-center items-center cursor-pointer shadow-md py-40 px-10 text-4xl text-black rounded-xl
                    transition duration-500 ease-in-out hover:shadow-2xl hover:bg-blue-400 hover:text-yellow-400" >
                        <p>Standard Conversion</p>
                        <p>${state.usdAmount} = {state.convertedAmount.toPrecision(5)} {state.selectedCurrency.replace("USD", "")}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white cursor-pointer shadow-md py-40 px-10 text-4xl text-black rounded-xl
                    transition duration-500 ease-in-out hover:shadow-2xl hover:bg-blue-400 hover:text-yellow-400">
                        <p>Big Company Employee</p>
                        {/* Big Company Employee's get 10% extra, as they need a holiday ! */}
                        <p>${state.usdAmount} = {(state.convertedAmount*1.1).toPrecision(5)} {state.selectedCurrency.replace("USD", "")}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Output;
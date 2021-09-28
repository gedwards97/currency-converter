import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../store/context';
import CURR_URL from "../constants/index";


export const Input = () => {
    //  Retrieving the global state as the page is loaded 
    const {state, actions} = useContext(Context);

    console.log("INPUT STATE")
    console.log(state)

    // Retrieving the currencies available for conversion 
    useEffect(() => {
        setTimeout(() => {
            fetch(CURR_URL)
            .then(res => res.json())
            .then(data => {
                // Updating the global state currencyOptions  
                actions({
                    type:"setState", payload: {...state, currencyOptions: [...Object.keys(data.quotes)]}
                })    
            })
            // Logging API Failure
            // TODO - Set failure boolean to true, and redirect user to failedExchange if true.
            .catch(err =>{
                console.log(err.message)
            })
        },1000)
    }, []);

    
    
    // CurrencyForm class
    class CurrencyForm extends React.Component {
        
        // Change functions, which update relevant global state variables corresponding to the user's inputs 
        usdChange = (event) => {actions({
            type:"setState", payload: {...state, usdAmount: Number(event.target.value)}});
        }

        currencyChange = (event) => {
            actions({type:"setState", payload: {...state, selectedCurrency: event.target.value,
            }});
        }

        render() {
            // TODO - Make Form Resposive (ran out of time)
            return (
                <form className="flex justify-center h-12 px-4 space-x-10">
                    {/* GDP input the user would like to convert */}
                    <input className="text-center" autoFocus="autoFocus" type="number" name="usdAmount" placeholder="USD" value={state.usdAmount}
                    onChange={this.usdChange}></input>
                    {/* Currency the user would like to convert to */}
                    <select name="selectedCurrency" onChange={this.currencyChange}
                    className="bg-yellow-400 text-white">
                        {/* Upack all currency options into the select input */}
                        {state.currencyOptions.map(option => (
                            // Removes "USD" prefix from CurrencyLayer's prefix
                            <option value={option} key={option}>{option.replace("USD", "")}</option>
                        ))}
                    </select>
                    {/* Form submission link - user redirected to output page */}
                    <Link to="/conversion" 
                    className="px-6 rounded-full bg-yellow-400 text-white
                    cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-yellow-400 
                    flex justify-center items-center">Go</Link>
                </form>
            );
        }
    }
    
    return (
        
        // Returning form component
        <div className="h-screen flex flex-col justify-center items-center bg-blue-500">
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-yellow-400 py-10'>Convert</h1>
            <CurrencyForm />
        </div>
    )
}


export default Input;
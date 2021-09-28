import {useState} from 'react';

// GlobalState hook, used to keep track of key variables throughout the application 
const useGlobalState = () => {
    // Global variables required throughout the UI
    const[state, setState] = useState({
        currencyOptions: [],
        usdAmount: 'undefined',
        selectedCurrency: "",
        exchangeRate: null,
        convertedAmount: null
    })
    // Method which switches chosen variable to defined payload using setState()
    const actions = (action) => {
        const {type, payload} = action; 
        switch(type) {
            case 'setState':
                return setState(payload);
            // return original state if 'setState' not specified 
            default:
                return state;
        }
    }
    return {state, actions}
}

export default useGlobalState
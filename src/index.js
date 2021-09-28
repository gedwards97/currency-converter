import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Router which uses HTML5 history to keep UI in sync with URL 
import {BrowserRouter} from 'react-router-dom'

// Importing GlobalState hook and Context - allowing data to be shared globally throughout the application
import useGlobalState from './store/useGlobalState';
import Context from './store/context';

const Index = () => {
  // Defining global state
  const state = useGlobalState();
  return(
    <React.StrictMode>
      <BrowserRouter>
      {/* Wrapping application in GlobalState, so key variables can be accessed and manipulated throughout the application */}
        <Context.Provider value={state}>
          <App />
        </Context.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);


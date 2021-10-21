
//////////////////      dependencies                    /////////////////////////



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import {Web3ReactProvider} from '@web3-react/core';
import Web3 from 'web3';

///////////////////////////////////////////////////////////////////////////////////
//////////   set dark mode   /////////////////////////////////////////////////////

const theme = extendTheme({
  
  config : {initialColorMode: 'dark'}

  }
  );
  
  ///////////////////////         dark mode is set       ///////////////////////////


  function getLibrary(provider) {
    return new Web3(provider)
  }



  //////////////////////         render app                /////////////////////////




ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider theme = {theme}>
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { Button, Heading } from "@chakra-ui/react";
import { useWeb3React } from '@web3-react/core';
import {injected} from './connectors';
import Web3 from 'web3';





function App() {

  
  const { active, account, library, connector, activate, deactivate } = useWeb3React()



  async function connect() {              //connect wallet
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }

  }
  async function disconnect() {              //disconnect wallet
    try {
      await deactivate()
    } catch (ex) {
      console.log(ex)
    }

  }


  return (
     active? <div><Heading>You are Connected to MetaWill</Heading>
    <Button onClick={disconnect}>Disonnect Wallet</Button>
    <span>Connected with: <b>{account}</b></span> </div>
    :
     <div><Heading>Welcome to MetaWill</Heading>
    <Button onClick={connect}>Connect Wallet</Button>
    <span>Not connected</span>
    </div>
  

    
  );

  


}

export default App;

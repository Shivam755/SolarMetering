# SolarMetering
A block-chain based web-application which can be used by both grid-companies and users.

## Installation steps
### 1.Create a react app
Make sure you have node installed in your pc. If you don't download it from `https://nodejs.org/en/download/`.
We need the Node-Package-Manager(npm) to run create-react-app for initial setup.

After making sure that you have node installed, open the terminal, go to the folder where you want to create the application and run `npx create-react-app solar_metering`.
This will install all the basic requirements.

### 2.Download and move source files
Download the **src** folder from this repo replace the **src** folder of your react-app folder.

### 3.Install dependencies
There are some other dependencies that you need to install before successfully running this application.
1. **web3** command: `npm install web3`
2. **styled-components** command: `npm install styled-components`
3. **react-router-dom** command: `npm install react-router-dom`
4. **material-ui** first run command: `npm install @material-ui/core` then run command: `npm install @material-ui/icon`

After this, you're done with react part of the application.
Next you have to deploy the smart-contract.

**Note: For this project I have used ganache as the default block-chain network. If you want to use any other network, then you have to change the address in web3.jsx**
```
import Web3 from "web3";

const web3 = new Web3("http://127.0.0.1:7545");//Add the address of your block-chain network
export default web3;
```

### 4.Installing ganache:
Download the ganache package from `https://www.trufflesuite.com/ganache`.

Install the package and run the application.
You can either 'Quickstart' or create a workspace.

### 5.Deploying Contract:
After the workspace has started.
Open remix IDE `https://remix.ethereum.org/`. This is an online ide by ethereum.

Upload `contract/index.sol` in the "File-Explorers" section.

Compile the contract in "Solidity Compilers" section. **Make sure you have selected a valid compiler version**.

In "Deploy and run transaction" section, change the **environment** to "Web3 Provider". Change the port-number to **7545** in the dialogue-box that appears.

Now, make sure correct file is selected and click on deploy.

A contract appears under "Deployed Contracts" section.
Click on the copy button which copies the contract address to your clipboard.

Now, open `/src/Components/netMetering.jsx` and change the address value to the copied address
```
import web3 from './web3';

// Contract address
const address = '0x3cdceE18594C10946f3F46C6665AD956e4ec585B'; //Address of the contract
```
Save the file.

## Running the application:
You only need to run the react-development-server using the command `npm start`.


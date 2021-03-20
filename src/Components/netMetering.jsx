import web3 from './web3';

// Contract address
const address = '0x3771863316De47a8b31EE6F9Ac34370c4ad12b50';

// Contract ABI
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ste",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "passwd",
				"type": "string"
			}
		],
		"name": "addCompany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "fName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ste",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "comId",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "passwd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eM",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prf",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cRead",
				"type": "uint256"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			}
		],
		"name": "removeCompany",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			}
		],
		"name": "removeUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "compareStrings",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "passwd",
				"type": "string"
			}
		],
		"name": "verifyCompLogin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "passwd",
				"type": "string"
			}
		],
		"name": "verifyLogin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
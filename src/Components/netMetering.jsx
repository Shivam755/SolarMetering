import web3 from './web3';

// Contract address
const address = '0x3cdceE18594C10946f3F46C6665AD956e4ec585B';

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
				"internalType": "string",
				"name": "subId",
				"type": "string"
			},
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
				"internalType": "uint256",
				"name": "iRead",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oRead",
				"type": "uint256"
			}
		],
		"name": "addUser",
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
		"inputs": [],
		"name": "companylist",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ewalletId",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "companyname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "state",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					}
				],
				"internalType": "struct Net_metering.company[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
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
			}
		],
		"name": "getCompdata",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
			}
		],
		"name": "get_data",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "SubId",
				"type": "string"
			}
		],
		"name": "rejectCustomer",
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
				"name": "subId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "eId",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "state",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "gridId",
				"type": "address"
			}
		],
		"name": "updateDetails",
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
				"name": "subId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "passwd",
				"type": "string"
			}
		],
		"name": "updatePasswd",
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
				"name": "subId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "iRead",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oRead",
				"type": "uint256"
			}
		],
		"name": "updateReading",
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
		"inputs": [],
		"name": "userlist",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ewalletId",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "fullName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "state",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "companyID",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subscriberId",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "inRead",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "outRead",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "verified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rejected",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "inConsumed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "outConsumed",
						"type": "uint256"
					}
				],
				"internalType": "struct Net_metering.user[]",
				"name": "",
				"type": "tuple[]"
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
				"name": "subId",
				"type": "string"
			}
		],
		"name": "verifyCustomer",
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
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "subId",
				"type": "string"
			}
		],
		"name": "viewReading",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
const CONTRACT_METADATA= {
	"compiler": {
		"version": "0.8.28+commit.7893614a"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_platformWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_platformFeePercentage",
						"type": "uint256"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "DepositMade",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "MilestoneClaimed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					}
				],
				"name": "MilestoneWillCreated",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					}
				],
				"name": "Ping",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newRecipient",
						"type": "address"
					}
				],
				"name": "RecipientUpdated",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "originalOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "UnclaimedWillDistributed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "WillClaimed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "string",
						"name": "description",
						"type": "string"
					}
				],
				"name": "WillCreated",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "willIndex",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "releaseIndex",
						"type": "uint256"
					}
				],
				"name": "claimMilestoneWill",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "claimNormalWill",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address[]",
						"name": "_beneficiaries",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "_releaseTimes",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "_releasePercentages",
						"type": "uint256[]"
					},
					{
						"internalType": "string[]",
						"name": "_descriptions",
						"type": "string[]"
					}
				],
				"name": "createMilestoneWill",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address payable",
						"name": "_beneficiary",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_description",
						"type": "string"
					}
				],
				"name": "createNormalWill",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "deposit",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "distributeUnclaimedWill",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getActiveNormalWillOwners",
				"outputs": [
					{
						"internalType": "address[]",
						"name": "",
						"type": "address[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getAllWills",
				"outputs": [
					{
						"internalType": "address[]",
						"name": "",
						"type": "address[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					}
				],
				"name": "getMilestoneWills",
				"outputs": [
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "totalAmount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "claimedAmount",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "beneficiary",
										"type": "address"
									},
									{
										"internalType": "uint256",
										"name": "releaseTime",
										"type": "uint256"
									},
									{
										"internalType": "uint256",
										"name": "releasePercentage",
										"type": "uint256"
									},
									{
										"internalType": "string",
										"name": "description",
										"type": "string"
									},
									{
										"internalType": "bool",
										"name": "isClaimed",
										"type": "bool"
									}
								],
								"internalType": "struct WillManager.MilestoneRelease[]",
								"name": "releases",
								"type": "tuple[]"
							},
							{
								"internalType": "bool",
								"name": "isFullyClaimed",
								"type": "bool"
							}
						],
						"internalType": "struct WillManager.MilestoneWill[]",
						"name": "",
						"type": "tuple[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getTotalWills",
				"outputs": [
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
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "hasNormalWill",
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
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "milestoneWills",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimedAmount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isFullyClaimed",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "normalWills",
				"outputs": [
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastPingTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tenYears",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isClaimed",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "ping",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "platformFeePercentage",
				"outputs": [
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
				"inputs": [],
				"name": "platformWallet",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newRecipient",
						"type": "address"
					}
				],
				"name": "updateRecipient",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/WillManager.sol": "WillManager"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts/token/ERC20/IERC20.sol": {
			"keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
			"license": "MIT",
			"urls": [
				"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
				"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
			]
		},
		"contracts/WillManager.sol": {
			"keccak256": "0x3f6f35f6a1c657e6ba9b71dd7ff79e32c2bbc7a427bec907da83659141c2e15a",
			"license": "MIT",
			"urls": [
				"bzz-raw://b58b3eb71cf13db05a7c49bba2a2ff860954080ec3955f5e304835002b9e9d94",
				"dweb:/ipfs/Qmd6x5yvqE9Qczz2YMet6JdZCj6tMUwhCnKSfVNadA6gQN"
			]
		}
	},
	"version": 1
}

export default CONTRACT_METADATA.output.abi;
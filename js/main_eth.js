// const contAbi = [
// 	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "owner",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "approved",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "uint256",
// 				name: "tokenId",
// 				type: "uint256",
// 			},
// 		],
// 		name: "Approval",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "owner",
// 				type: "address",
// 			},
// 			{
// 				indexed: true,
// 				internalType: "address",
// 				name: "operator",
// 				type: "address",
// 			},
// 			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
// 		],
// 		name: "ApprovalForAll",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: "bool",
// 				name: "trueOrFalse",
// 				type: "bool",
// 			},
// 		],
// 		name: "GemUpgrade",
// 		type: "event",
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: "address", name: "from", type: "address" },
// 			{ indexed: true, internalType: "address", name: "to", type: "address" },
// 			{
// 				indexed: true,
// 				internalType: "uint256",
// 				name: "tokenId",
// 				type: "uint256",
// 			},
// 		],
// 		name: "Transfer",
// 		type: "event",
// 	},
// 	{
// 		inputs: [],
// 		name: "RANDOM",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "activeSupply",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "approve",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "address", name: "owner", type: "address" }],
// 		name: "balanceOf",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "collectedFee",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "gamePot",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
// 		name: "gemStatus",
// 		outputs: [
// 			{ internalType: "uint256", name: "level", type: "uint256" },
// 			{ internalType: "uint256", name: "balance", type: "uint256" },
// 		],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "getApproved",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "getTotalHighLevelGems",
// 		outputs: [
// 			{ internalType: "uint256", name: "totalHighLevelGems", type: "uint256" },
// 		],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "highestGemLevel",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		name: "highestLevelGems",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "owner", type: "address" },
// 			{ internalType: "address", name: "operator", type: "address" },
// 		],
// 		name: "isApprovedForAll",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "lastDraw",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "lastWinner",
// 		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint8", name: "_mintAmount", type: "uint8" }],
// 		name: "mint",
// 		outputs: [],
// 		stateMutability: "payable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "name",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "owner",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
// 		name: "ownerOf",
// 		outputs: [{ internalType: "address", name: "", type: "address" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "pickWinner",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "safeTransferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 			{ internalType: "bytes", name: "data", type: "bytes" },
// 		],
// 		name: "safeTransferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "operator", type: "address" },
// 			{ internalType: "bool", name: "approved", type: "bool" },
// 		],
// 		name: "setApprovalForAll",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
// 		name: "supportsInterface",
// 		outputs: [{ internalType: "bool", name: "", type: "bool" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "symbol",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
// 		name: "tokenURI",
// 		outputs: [{ internalType: "string", name: "", type: "string" }],
// 		stateMutability: "view",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "address", name: "from", type: "address" },
// 			{ internalType: "address", name: "to", type: "address" },
// 			{ internalType: "uint256", name: "tokenId", type: "uint256" },
// 		],
// 		name: "transferFrom",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [
// 			{ internalType: "uint256", name: "_gemOne", type: "uint256" },
// 			{ internalType: "uint256", name: "_gemTwo", type: "uint256" },
// 			{ internalType: "uint256", name: "_gemThree", type: "uint256" },
// 		],
// 		name: "upgradeGems",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
// 		name: "withdrawBalance",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// 	{
// 		inputs: [],
// 		name: "withdrawFee",
// 		outputs: [],
// 		stateMutability: "nonpayable",
// 		type: "function",
// 	},
// ];
const contAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "trueOrFalse",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "getId",
				"type": "uint256"
			}
		],
		"name": "GemUpgrade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "activeSupply",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "collectedFee",
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
		"name": "gamePot",
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
				"internalType": "uint256",
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "gemStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"inputs": [],
		"name": "getTotalHighLevelGems",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalHighLevelGems",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestGemLevel",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "highestLevelGems",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
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
		"inputs": [],
		"name": "lastDraw",
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
		"name": "lastWinner",
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
				"internalType": "uint8",
				"name": "_mintAmount",
				"type": "uint8"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
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
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"inputs": [],
		"name": "symbol",
		"outputs": [
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
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
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
				"internalType": "uint256",
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
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
		"inputs": [],
		"name": "totalSupply",
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
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gemOne",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_gemTwo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_gemThree",
				"type": "uint256"
			}
		],
		"name": "upgradeGems",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "withdrawBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawCollectedFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] // test 2

// const contAddress = "0x19F4e328f9f78238ADc3b772b8f8891E1475b0bc"; //Test FTM net 1
const contAddress = "0xb461627bff821a246E50F12C5026abB10bD3b1e3"; //Test FTM net 2

var nftContract;
var currentAddr;
var web3;
var ownedNFts = [];
// var testContract = "0x41f3532B4667b3A4a526EeA0c4103e486c5053e7"; //FAM reward card

/* ----------------------------
*	Connect
* ----------------------------*/
async function connect() {
	console.log('Connecting to wallet...')
	$('#connectButton').attr('disabled', false);
	try {
		var accounts = await ethereum.request({
			method: 'eth_requestAccounts'
		})
		if (accounts.length == 0) {
			console.log('Please connect to Wallet.');
			$('#connectButton').html('Connect wallet')
		} else {
			if (accounts[0] !== currentAddr) {
				currentAddr = accounts[0];
			}
			if (currentAddr !== null) {
				console.log('Wallet connected = ' + currentAddr)
				let shortenedAccount = currentAddr.replace(currentAddr.substring(5,
					38),
					"***")
				$('#connectButton').html(shortenedAccount)
				$('#connectButton').attr('disabled', true)
			}
		}
	} catch (err) {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			alert('Please connect wallet.');
		} else {
			console.error(err);
		}
	}
}

/* ----------------------------
*	Load Web3
* ----------------------------*/
async function loadWeb3() {
	if (window.ethereum) {
		web3 = new Web3(window.ethereum)

		var chainID = await web3.eth.net.getId();
		console.log('Connected to chain ' + chainID)

		if (chainID == 0xfa2) { //main 250, test 0xfa2
			await loadContracts();
			await connect();
		} else {
			alert('Please switch to Fantom Opera in your wallet');
		}
	} else {
		$('#connectButton').attr('disabled', true)
	}
}

/* ----------------------------
*	Load Contracts
* ----------------------------*/
async function loadContracts() {
	console.log('Loading contracts...')
	nftContract = new web3.eth.Contract(contAbi, contAddress);
	console.log('Done loading contracts.')
}

/* ----------------------------
*	get Mint token from trxn
* ----------------------------*/
async function getTokenId(tx) {
	var newMints = [];

	await nftContract.events.Transfer({ fromBlock: tx.blockNumber }, function (error, events) { })
		.on('data', function (events) {
			var jj = events.returnValues.tokenId;
			if (!newMints.includes(jj)) {
				newMints.push(jj);
			}
		});

	// if (confirm("Mint was successful. New minted NFTs Token: " + newMints[0] + ", " + newMints[1] + ", " + newMints[2])) {
	// 	location.reload();
	// } else {
	// 	location.reload();
	// }
	return newMints;
}

/* ----------------------------
*	get upgrade success from trxn
* ----------------------------*/
async function upgradeSuccessOrNot(tx) {
	var tokenUpgraded = 0;
	var success;

	await nftContract.events.GemUpgrade({ fromBlock: tx.blockNumber }, function (error, events) { })
		.on('data', function (events) {
			// console.log(events.returnValues);
			success = events.returnValues.trueOrFalse;
			if (success == true) {
				tokenUpgraded = events.returnValues.getId;
				// if (confirm("Upgrade was successful. New minted NFT: " + tokenUpgraded)) {
				// 	location.reload();
				// }
				// else {
				// 	location.reload();
			}
		});
	return tokenUpgraded;
}

/* ----------------------------
*	Mint
* ----------------------------*/
async function mint(mintAmount) {
	var mintPrice = 1e18;
	// console.log(mintPrice);

	var totalPrice = mintPrice * mintAmount;
	var minted = [];

	await nftContract.methods.mint(mintAmount).send({
		from: currentAddr,
		value: totalPrice
	}, function (error, hash) {
		if (!error) {
			console.log("Transaction sent!", hash);
			const interval = setInterval(function () {
				console.log("Attempting to get transaction receipt...");
				web3.eth.getTransactionReceipt(hash, function (err, rec) {
					if (rec) {
						if (rec.status == true) {
							console.log(rec);
							try {
								minted = getTokenId(rec);
							} catch (error) {
								console.log(error);
							}
						}
						// alert("Mint Successful. Refresh the page");
						clearInterval(interval);
					}
				});
			},
				1000);
		} else {
			console.log("Something went wrong while submitting your transaction:", error);
		}
	});
	if (minted.length != 0) {
		sendAlert("New Minted token" + Arrays.toString(minted));
		reloadStats();
	}
}
/* ----------------------------
*	Upgrade
* ----------------------------*/
async function upgrade(gem1, gem2, gem3) {
	var token = 0;

	await nftContract.methods.upgradeGems(gem1, gem2, gem3).send({
		from: currentAddr,
		value: 0
	}, function (error, hash) {
		if (!error) {
			console.log("Transaction sent!", hash);
			const interval = setInterval(function () {
				console.log("Attempting to get transaction receipt...");
				web3.eth.getTransactionReceipt(hash, function (err, rec) {
					if (rec) {
						if (rec.status == true) {
							console.log(rec);
							try {
								token = upgradeSuccessOrNot(rec);
							} catch (error) {
								console.log(error);
							}
						}
						clearInterval(interval);
					}
				});
			},
				1000);
		} else {
			console.log("Something went wrong while submitting your transaction:", error);
		}
	});
	if (token != 0) {
		sendAlert("Upgraded NFT: " + token);
		reloadStats();
	}
	else {
		sendAlert("Upgrade failed");
		reloadStats();
	}
	// location.reload();
}

/* ----------------------------
*	Mint Wrapper
* ----------------------------*/
async function mintWrapper() {
	var mintAmount = document.getElementById('input').value;
	mint(mintAmount);
}

/* ----------------------------
*	Upgrade wrapper
* ----------------------------*/
async function upgradeWrapper() {
	var t1 = document.getElementById("dropdownMenuButton1").textContent;
	var t2 = document.getElementById("dropdownMenuButton2").textContent;
	var t3 = document.getElementById("dropdownMenuButton3").textContent;

	var gem1 = parseDropSelection(t1, ':Lvl', ':Bal');
	var gem2 = parseDropSelection(t2, ':Lvl', ':Bal');
	var gem3 = parseDropSelection(t3, ':Lvl', ':Bal');

	if (gem1 == gem2 && gem2 == gem3) {
		//console.log("3 gems are same level");
		var token1 = parseDropSelection(t1, '#', ' :Lvl');
		var token2 = parseDropSelection(t2, '#', ' :Lvl');
		var token3 = parseDropSelection(t3, '#', ' :Lvl');

		console.log(token1, token2, token3);
		upgrade(token1, token2, token3);
	} else {
		console.log("Choose same level Gem");
		sendAlert("Choose same level Gem");
	}
}

async function withdrawWrapper() {
	var gem = document.getElementById("dropdownMenuButtonWithdraw").textContent;
	var token = parseDropSelection(gem, '#', ' :Lvl');
	console.log(token);
	withdrawBalance(token);
}

function parseDropSelection(text, a, b) {
	// var token = text.slice(text.indexOf('#') + 1, text.lastIndexOf(':Lvl'));
	var token = text.slice(text.indexOf(a) + 1, text.lastIndexOf(b));
	return token;
}

/* ----------------------------
*	Pick Winner
* ----------------------------*/
async function pickWinner() {
	var button = document.getElementById("win");
	//var time = await nftContract.methods.winnerPickTime().call();

	var res = await nftContract.methods.pickWinner().call()
		.then(res => {
			console.log(res.json());
		})
		.catch(err => {
			console.log(err);
			// var message = JSON.parse(err.data);
			// console.log(message.message);
			// alert("Pick winner is not ready yet");
		});
	//console.log(res);
	var winner = await nftContract.methods.lastWinner().call();
	if (winner != 0) {
		{
			alert("Winner is" + res.substring(5, 38), "***");
		}
	}
}

/* ----------------------------
*	Game Stats
* ----------------------------*/
async function getDataContract() {
	try {
		await loadWeb3();
		await reloadStats();
	} catch (e) {
		console.log("Load Contract Error\n" + e);
	}
}

async function reloadStats() {
	if (nftContract) {
		sendAlert("...Updating data...");
		document.getElementById("loader").classList.toggle("hide-loader");

		try {
			sendAlert("Getting GEM Stats");
			var stat = document.getElementById("stat1").innerHTML;
			stat = '<h5 class="mb-md-5 title text-center">Game Stats</h5>\n';
			var stat2 = document.getElementById("stat2").innerHTML;
			stat2 = '<h5 class="mb-md-5 title text-center">Gem Pot Board</h5>\n';

			var gemPot = await nftContract.methods.gamePot().call();
			var activeSupply = await nftContract.methods.activeSupply().call();
			var highestLevel = await nftContract.methods.highestGemLevel().call();
			var lastDraw = await nftContract.methods.lastDraw().call();
			let lastDrawDate = new Date(lastDraw * 1000).toLocaleString('en-GB');
			var lastWinner = await nftContract.methods.lastWinner().call();
			//console.log(lastWinner);
			var lastWinnerAdd;
			if (lastWinner == 0) {
				lastWinnerAdd = 'None';
			}
			else {
				lastWinnerAdd = await nftContract.methods.ownerOf(lastWinner).call();
				lastWinnerAdd = lastWinnerAdd.replace(lastWinnerAdd.substring(5,
					38),
					"***")
			}
			stat += '<table class="table text-white"><tbody><tr><td>Active Supply: </td><td>' + activeSupply + '</td>\n';
			stat += '<tr><td>Highest Level: </td><td>' + highestLevel + '</td>\n';
			stat += '<tr><td>Gem Pot: </td><td>' + gemPot / 1e18 + ' FTM</td>\n';
			stat += '<tr><td>Last Draw: </td><td>' + lastDrawDate + '</td>\n';
			stat += '<tr><td>Last Winner: </td><td> ' + lastWinnerAdd + '</td></tbody></table>\n';


			var getTotalHighLevelGems = await nftContract.methods.getTotalHighLevelGems().call();

			if (getTotalHighLevelGems > 0) {
				for (let i = 0; i < getTotalHighLevelGems; i++) {
					var highestLevelGems = await nftContract.methods.highestLevelGems(i).call();
					var owner = await nftContract.methods.ownerOf(highestLevelGems).call();
					//console.log(owner);
					stat2 += '<p>' + owner.replace(owner.substring(5,
						38),
						"***") + '</p>';
				}
			}
			stat2 += '<button id="win" class="text-center mintButton-outline btn-sm" onclick="pickWinner()"role="button" style="justify-self: center;">Pick Winner</button>';

			document.getElementById("stat1").innerHTML = stat;
			document.getElementById("stat2").innerHTML = stat2;
		} catch (err) {
			console.log("Game Stat Error\n" + err);
		}
		await getOwnedGemTest();
		await dropDownSetup();

		document.getElementById("loader").classList.toggle("hide-loader");
	}
}
/* ----------------------------
*	Owned Gem
* ----------------------------*/
async function getOwnedGem() {
	sendAlert("Getting Owned Gems");
	ownedNFts.length = 0;

	var bal = await nftContract.methods.balanceOf(currentAddr).call();

	var stat = document.getElementById("balance").innerHTML;
	stat = '';
	stat += '<p class="text-center text-white sub-title pt-5">Owned Gems: ' + bal + '</p>\n';
	document.getElementById("balance").innerHTML = stat;
	// console.log("balance " + bal);
	var response = await fetch(`https: //api.paintswap.finance/v2/userNFTs?numToSkip=0&numToFetch=${bal}&user=${currentAddr}
	&orderBy=lastTransferTimestamp&orderDirection=desc&collections=${contAddress
		}`)
		.catch(err => {
			console.log("error: " + err)
		});
	var nft = await response.json();
	// console.log(ownedNFts.length);
	for (let i = 0; i < bal; i++) {
		console.log(nft.nfts[i
		]);
		ownedNFts.push(nft.nfts[i
		]);
		// showImage(ownedNFts[i].image, ownedNFts[i].name);
		// 	var nfts = await nftContract.methods.tokenOfOwnerByIndex(currentAddr, i).call();
		// 	ownedNFts.push(nfts);
		// var uri = await nftContract.methods.tokenURI(ownedNFts[i].token_id).call();
		// await fetch(uri)
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		//console.log(data);
		// 		// showImage(data.image, data.name);
		// 	})
		// 	.catch(err => {
		// 		console.log("error: " + err)
		// 		//debugAlert("getStaked() err" + err);
		// 	});
	}
	// showImage();
}

async function getOwnedGemTest() {
	sendAlert("Getting Owned Gems");
	ownedNFts.length = 0;

	var bal = await nftContract.methods.balanceOf(currentAddr).call();
	console.log("balance " + bal);

	var stat = document.getElementById("balance").innerHTML;
	stat = '';
	stat += '<p class="text-center text-white pt-3">Owned Gems: ' + bal + '</p>\n';
	document.getElementById("balance").innerHTML = stat;

	for (let i = 0; i < bal; i++) {
		var nfts = await nftContract.methods.tokenOfOwnerByIndex(currentAddr, i).call();
		// console.log(nfts);
		ownedNFts.push(nfts);
		// var uri = await nftContract.methods.tokenURI(nfts).call();
		// await fetch(uri)
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log(data);
		// 		// showImage(data.image, data.name);
		// 	})
		// 	.catch(err => {
		// 		console.log("error: " + err)
		// 		//debugAlert("getStaked() err" + err);
		// 	});
	}
}

/* ----------------------------
*	Show Image of GEM
* ----------------------------*/
async function showImage(container, token) {
	var gemContainer = document.getElementById("gemContainer" + container).innerHTML;

	// var uri = await nftContract.methods.tokenURI(token).call();
	// await fetch(uri)
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log(data);
	// 		gemContainer += '<img class="gem" src="' + data.image + '">\n';
	// 		document.getElementById("myGemImage" + container).innerHTML = gemContainer;
	// 	})
	// 	.catch(err => {
	// 		console.log("error: " + err)
	// 		//debugAlert("getStaked() err" + err);
	// 	});
	gemContainer += '<div class="myGemImage">\n';
	gemContainer += '<embed class="gem" src="svg2.html">\n';
	gemContainer += '</div\n';

	document.getElementById("gemContainer" + container).innerHTML = gemContainer;
}

/* ----------------------------
*	Prevent duplicate in dropdown
* ----------------------------*/
function preventDupes() {
	var selectOne = document.getElementById("dropdownMenuButton1").innerHTML;
	var selectTwo = document.getElementById("dropdownMenuButton2").innerHTML;
	var selectThree = document.getElementById("dropdownMenuButton3").innerHTML;

	// var optionsCurr = current.getElementsByTagName('option');
	var options1 = document.getElementById("dropdownMenu1").getElementsByTagName('option');
	var options2 = document.getElementById("dropdownMenu2").getElementsByTagName('option');
	var options3 = document.getElementById("dropdownMenu3").getElementsByTagName('option');
	// console.log(options1);

	for (let i = 0; i < options1.length; i++) {
		options1[i
		].disabled = false;
		options2[i
		].disabled = false;
		options3[i
		].disabled = false;

		if (options1[i
		].textContent == selectOne || options1[i
		].textContent == selectTwo || options1[i
		].textContent == selectThree) {
			options1[i
			].disabled = true;
		}
		if (options2[i
		].textContent == selectOne || options2[i
		].textContent == selectTwo || options2[i
		].textContent == selectThree) {
			options2[i
			].disabled = true;
		}
		if (options3[i
		].textContent == selectOne || options3[i
		].textContent == selectTwo || options3[i
		].textContent == selectThree) {
			options3[i
			].disabled = true;
		}
	}
	// options1[index - 1].disabled = true;
	// options2[index - 1].disabled = true;
}

/* ----------------------------
*	Dropdown menu setup
* ----------------------------*/
async function dropDownSetup() {
	sendAlert("Setting Dropdown");
	var total = ownedNFts.length;
	//var total = 5;
	var one = document.getElementById("dropdownMenu1");
	var two = document.getElementById("dropdownMenu2");
	var three = document.getElementById("dropdownMenu3");
	var withD = document.getElementById("dropdownWithdraw");

	var htmlWD = '';

	document.getElementById("dropdownMenuButton1").innerHTML = '1st Gem';
	document.getElementById("dropdownMenuButton2").innerHTML = '2nd Gem';
	document.getElementById("dropdownMenuButton3").innerHTML = '3rd Gem';
	document.getElementById("dropdownMenuButtonWithdraw").innerHTML = 'Select a GEM';

	//set up drop down text
	for (let i = 0; i < total; i++) {

		var gemStatus = await nftContract.methods.gemStatus(ownedNFts[i
		]).call(); //get the status of gem from owned NFts

		htmlWD += '<option class="dropdown-item">Gem#' + ownedNFts[i
		] + ' :Lvl' + gemStatus.level + ' :Bal' + gemStatus.level + '</option>\n';
	}
	one.innerHTML = htmlWD;
	two.innerHTML = htmlWD;
	three.innerHTML = htmlWD;
	withD.innerHTML = htmlWD;

	//Add listeners
	$('#dropdownMenu1 option').on('click', function () {
		// console.log($(this).html());
		document.getElementById("dropdownMenuButton1").innerHTML = $(this).html();
		// var token = parseDropSelection($(this).html());
		// showImage(1, token);
		preventDupes();
	});

	$('#dropdownMenu2 option').on('click', function () {
		//console.log($(this).html());
		document.getElementById("dropdownMenuButton2").innerHTML = $(this).html();
		// var token = parseDropSelection($(this).html());
		// showImage(2, token);
		preventDupes();
	});

	$('#dropdownMenu3 option').on('click', function () {
		// console.log($(this).html());
		document.getElementById("dropdownMenuButton3").innerHTML = $(this).html();
		// var token = parseDropSelection($(this).html());
		// showImage(3, token);
		preventDupes();
	});

	$('#dropdownWithdraw option').on('click', function () {
		document.getElementById("dropdownMenuButtonWithdraw").innerHTML = $(this).html();
	});

	console.log("Dropdown ready");
}
function sendAlert(message) {
	var alert = document.getElementById("alert-txt").innerHTML;
	alert = '<p class="text-white mb-0 p-small">' + message + '</p>\n';
	document.getElementById("alert-txt").innerHTML = alert;
	var div = document.getElementById("alert");
	div.scrollTo = div.scrollHeight;
}

$(document).ready(function () {
	getDataContract();
})

$('#connectButton').click(function () {
	connect();
});
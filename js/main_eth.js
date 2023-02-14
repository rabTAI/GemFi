
const contAbi = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "trueOrFalse",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "gemId",
				type: "uint256",
			},
		],
		name: "GemUpgraded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "gemId",
				type: "uint256",
			},
		],
		name: "WinnerPicked",
		type: "event",
	},
	{
		inputs: [],
		name: "activeSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_durationInHours", type: "uint256" },
		],
		name: "changeWinnerPickDuration",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "collectedFee",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "gamePot",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
		name: "gemStatus",
		outputs: [
			{ internalType: "uint256", name: "level", type: "uint256" },
			{ internalType: "uint256", name: "balance", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalHighLevelGems",
		outputs: [
			{ internalType: "uint256", name: "totalHighLevelGems", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "highestGemLevel",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "highestLevelGems",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "lastDraw",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "lastWinner",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint8", name: "_mintAmount", type: "uint8" }],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
		name: "pickWinner",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
		name: "tokenByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "uint256", name: "index", type: "uint256" },
		],
		name: "tokenOfOwnerByIndex",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_gemOne", type: "uint256" },
			{ internalType: "uint256", name: "_gemTwo", type: "uint256" },
			{ internalType: "uint256", name: "_gemThree", type: "uint256" },
		],
		name: "upgradeGems",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "winnerPickDuration",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_gemId", type: "uint256" }],
		name: "withdrawBalance",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdrawCollectedFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
]

const contAddress = "0x9cBd3f0382408a64f8dbEab87762A698b8153Ac8"; //Test FTM net 2

var nftContract;
var currentAddr;
var web3;
var ownedNFts = [];
var gemPotEligible = [];
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
			sendAlert('Please connect wallet.');
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
			await connect();
			await loadContracts();
		} else {
			sendAlert('Please switch to Fantom Opera in your wallet');
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
	var event = new CustomEvent('contractLoaded');
	window.dispatchEvent(event); // Send the custom event to the window
}

/* ----------------------------
*	get Mint token from trxn
* ----------------------------*/
async function getMintTokenID(tx) {

	var interval1 = setInterval(function a() {
		var newMints = [];
		nftContract.events.Transfer({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				var jj = events.returnValues.tokenId;
				console.log(jj);
				if (!newMints.includes(jj)) {
					newMints.push(jj);
				}
				if (newMints.length == 3) {
					sendAlertPerm("New Minted Gem #" + JSON.stringify(newMints));
					clearInterval(interval1);
				}
			});
	}, 3000);
}

/* ----------------------------
*	Mint
* ----------------------------*/
async function mint(mintAmount) {
	var mintPrice = 1e18;
	// console.log(mintPrice);
	var totalPrice = mintPrice * mintAmount;

	await nftContract.methods.mint(mintAmount).send({
		from: currentAddr,
		value: totalPrice
	}, function (error, hash) {
		if (!error) {
			console.log("Transaction sent!", hash);

			const interval = setInterval(function () {
				sendAlertPerm("Getting mint status...");
				console.log("Attempting to get transaction receipt...");

				web3.eth.getTransactionReceipt(hash, function (error, rec) {
					if (rec) {
						console.log(rec);
						if (rec.status == true) {
							clearInterval(interval);
							updateData();
							try {
								getMintTokenID(rec);
							} catch (e) {
								console.log("Error getting mint Id:", e);
							}
						}
					}
				});
			}, 3000);
		}

	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", error);
		}
	});
}

/* ----------------------------
*	Mint Wrapper
* ----------------------------*/
async function mintWrapper() {
	var mintAmount = document.getElementById('input').value;
	mint(mintAmount);
}

/* ----------------------------
*	get upgrade success from trxn
* ----------------------------*/
async function upgradeStatus(tx) {
	var interval = setInterval(function a() {
		var tokenUpgraded = 0;
		var success;

		nftContract.events.GemUpgraded({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				console.log(events.returnValues);
				success = events.returnValues.trueOrFalse;
				if (success == true) {
					tokenUpgraded = events.returnValues.gemId;
					sendAlertPerm("Success: Gems upgraded!\nNew Gem #" + tokenUpgraded);

				} else {
					sendAlertPerm("Last Upgrade failed");
					console.log(events.returnValues);
				}
				clearInterval(interval);
			});
	}, 3000);
}

/* ----------------------------
*	Upgrade
* ----------------------------*/
async function upgrade(gem1, gem2, gem3) {

	await nftContract.methods.upgradeGems(gem1, gem2, gem3).send({
		from: currentAddr,
		value: 0
	}, function (error, hash) {
		if (!error) {
			console.log("Transaction sent!", hash);

			const interval = setInterval(function () {
				console.log("Attempting to get transaction receipt...");
				sendAlertPerm("Getting upgrade status...");

				web3.eth.getTransactionReceipt(hash, function (error, rec) {

					if (rec) {
						console.log(rec);
						if (rec.status == true) {
							clearInterval(interval);
							updateData();
							try {
								upgradeStatus(rec);
							} catch (e) {
								console.log("Error getting upgrade status", e);
								sendAlertPerm("Error getting Upgrade status");
							}
						}
					}
				});
			}, 3000);
		}
	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", error);
		}
	});
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
		// console.log("Error: Gems not same level");
		sendAlertPerm("Choose same level Gems for upgrade", 'red');
	}
}

/* ----------------------------
*	Withdraw
* ----------------------------*/
async function withdrawBalance(token) {

	await nftContract.methods.withdrawBalance(token).send({
		from: currentAddr,
		value: 0
	}, function (error, hash) {
		if (!error) {
			console.log("Transaction sent!", hash);

			const interval = setInterval(function () {
				sendAlertPerm("Getting Withdraw status...")
				console.log("Attempting to get transaction receipt...");

				web3.eth.getTransactionReceipt(hash, function (error, rec) {
					if (rec) {
						console.log(rec);
						if (rec.status == true) {
							sendAlertPerm("Withdraw successful")
							clearInterval(interval);
							updateData();
						}
					}
				});
			},
				1000);
		}
	}).catch(err => {
		hj
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", error);
		}
	});
}

/* ----------------------------
*	Withdraw wrapper
* ----------------------------*/
async function withdrawWrapper() {
	var gem = document.getElementById("dropdownMenuButtonWithdraw").textContent;
	var token = parseDropSelection(gem, '#', ' :Lvl');
	// console.log(token);
	withdrawBalance(token);
}

async function winnerStatus(tx) {
	var interval = setTimeout(function a() {
		var winner = 0;

		nftContract.events.WinnerSelected({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				console.log(events.returnValues);
				winner = events.returnValues.gemId
				sendAlertPerm("Winner !!!\nGem #" + winner + " Pot: " + gemPot);
				reloadStats();
				clearInterval(interval);
			});
	}, 3000);
}
async function checkEligibility() {
	if (gemPotEligible.length == 0) {
		return 0
	} else if (ownedNFts.length == 0) {
		return 0;
	} else {
		ownedNFts.forEach(obj => {
			if (gemPotEligible.includes(obj.token)) {
				return obj.token;
			}
		});
		return 0;
	}
}
/* ----------------------------
*	Pick Winner
* ----------------------------*/
async function pickWinner() {
	console.log("pick winner");
	var eligible = await checkEligibility();

	if (eligible != 0) {
		await nftContract.methods.pickWinner(eligible).send({
			from: currentAddr,
			value: 0,
		}, function (hash) {
			console.log("Transaction sent!", hash);
			const interval = setInterval(function () {
				sendAlertPerm("Getting Winner status...")
				console.log("Attempting to get transaction receipt...");

				web3.eth.getTransactionReceipt(hash, function (error, rec) {
					if (rec) {
						console.log(rec);

						if (rec.status == true) {
							clearInterval(interval);
							reloadStats();
							try {
								winnerStatus(rec);
							} catch (e) {
								console.log("Error getting winner status", e);
							}
						}
					}
				});
			},
				1000);
		}).catch(err => {
			if (err.code === 4001) {
				// EIP-1193 userRejectedRequest error
				// If this happens, the user rejected the connection request.
				sendAlertPerm("User denied Transaction");
			}
			else {
				console.log("Something went wrong while submitting your transaction:", error);
			}
		});
	} else {
		sendAlertPerm("Not eligible to call function", 'red');
	}

}

async function contractCreationTime() {
	var blockNumber, time, date;

	hash = '0x325c774c04b308b1c550653fc61a714ed974fdb48b5cd33516d0a7d35528e07a'; // from create ftm-scan

	await web3.eth.getTransactionReceipt(hash, function (err, rec) {
		if (rec) {
			blockNumber = rec.blockNumber;
		}
	});
	time = await web3.eth.getBlock(blockNumber);

	return time.timestamp;
}
/* ----------------------------
*	Reload game stats
* ----------------------------*/
async function reloadStats() {
	if (nftContract) {
		sendAlert("Updating...Stats...");
		document.getElementById("loader").classList.toggle("hide-loader");

		try {
			var stat = document.getElementById("stat1").innerHTML;
			var stat2 = document.getElementById("stat2").innerHTML;
			stat = '';
			stat2 = '';

			var gemPot = await nftContract.methods.gamePot().call();
			var activeSupply = await nftContract.methods.activeSupply().call();
			var highestLevel = await nftContract.methods.highestGemLevel().call();
			var lastDraw = await nftContract.methods.lastDraw().call();
			var create = await contractCreationTime();

			let lastDrawDate;
			if (lastDraw == create) {
				lastDrawDate = 'None';
			}
			else {
				lastDrawDate = new Date(lastDraw * 1000).toLocaleString('en-GB');
			}

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
			stat += '<table class="table text-white mb-0"><tbody><tr><td>Active Supply: </td><td>' + activeSupply + '</td>\n';
			stat += '<tr><td>Highest Level: </td><td>' + highestLevel + '</td></tbody>\n';
			stat += '<tbody><tr><td>Pot Balance: </td><td>' + gemPot / 1e18 + ' FTM</td>\n';
			stat += '<tr><td>Last Draw: </td><td>' + lastDrawDate + '</td>\n';
			stat += '<tr><td>Last Winner: </td><td> ' + lastWinnerAdd + '</td>\n';
			stat += '<tr><td>Owned Gems: </td><td>' + bal + '</td ></tbody ></table >\n';

			gemPotEligible = [];

			var getTotalHighLevelGems = await nftContract.methods.getTotalHighLevelGems().call();

			if (getTotalHighLevelGems > 0) {
				for (let i = 0; i < getTotalHighLevelGems; i++) {
					var highestLevelGems = await nftContract.methods.highestLevelGems(i).call();
					// var owner = await nftContract.methods.ownerOf(highestLevelGems).call();
					// //console.log(owner);
					// stat2 += '<p>' + owner.replace(owner.substring(5,
					// 	38),
					// 	"***") + '</p>';
					// var status = await nftContract.methods.gemStatus(highestLevelGems);

					gemPotEligible.push(highestLevelGems);
					stat2 += '<p>Gem #' + highestLevelGems + '</p\n'
				}
				document.getElementById("win").removeAttribute("hidden");
				document.getElementById("win").removeAttribute("disabled");
			} else {
				stat2 += 'Not ready yet!';
				document.getElementById("win").setAttribute("disabled", true);
			}
			document.getElementById("stat1").innerHTML = stat;
			document.getElementById("stat2").innerHTML = stat2;
		} catch (err) {
			console.log("Game Stat Error\n" + err);
		}
		document.getElementById("loader").classList.toggle("hide-loader");
	}
}
/* ----------------------------
*	Owned Gem
* ----------------------------*/
async function getOwned(index, nft) {

	/* Token of owner Method*/
	var tokenId = await nftContract.methods.tokenOfOwnerByIndex(currentAddr, index).call(); //get token
	var gemStatus = await nftContract.methods.gemStatus(tokenId).call(); //get the status of gem from token
	/* Paintswap method */
	// var tokenId = nft.tokenId; //paintswap method
	// var gemStatus = await nftContract.methods.gemStatus(tokenId).call(); //get the status of gem from token

	//=============//
	//add to array
	var obj = { token: tokenId, level: gemStatus.level, balance: gemStatus.balance };
	ownedNFts.push(obj);

	return obj;
}
/* ----------------------------
*	Show Image of GEM
* ----------------------------*/
async function showImage(num, token) {
	var gemContainer = document.getElementById("myGemImage" + num).innerHTML;

	try {
		var uri = await nftContract.methods.tokenURI(token).call();
		await fetch(uri)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				gemContainer += '<img class="gem" src="' + data.image + '">\n';
			})
			.catch(err => {
				console.log("error: " + err)
				//debugAlert("getStaked() err" + err);
			});
	} catch (error) {
		console.log(error);
	}
}

async function dropDownSetup() {
	ownedNFts.length = 0;

	//reset droptext
	document.getElementById("dropdownMenuButton1").textContent = '1st Gem';
	document.getElementById("dropdownMenuButton2").textContent = '2nd Gem';
	document.getElementById("dropdownMenuButton3").textContent = '3rd Gem';
	document.getElementById("dropdownMenuButtonWithdraw").textContent = 'Select a GEM';
	//Preparing dropdown
	var one = document.getElementById("dropdownMenu1");
	var two = document.getElementById("dropdownMenu2");
	var three = document.getElementById("dropdownMenu3");
	var withD = document.getElementById("dropdownWithdraw");

	var htmlWD = '';

	try {
		bal = await nftContract.methods.balanceOf(currentAddr).call();
		// console.log("balance " + bal);

		////===========paintSwap method=============//
		// 	var response = await fetch(`https: //api.paintswap.finance/v2/userNFTs?numToSkip=0&numToFetch=${bal}&user=${currentAddr}
		// &orderBy=lastTransferTimestamp&orderDirection=desc&collections=${contAddress
		// 		}`)
		// 		.catch(err => {
		// 			console.log("error: " + err)
		// 		});
		// 	var nfts = await response.json();

		for (let i = 0; i < bal; i++) {
			var nft = await getOwned(i); //get owned by index method
			//dropdown menu
			htmlWD += '<option class="dropdown-item">Gem #' + nft.token + ' :Lvl ' + nft.level + ' :Bal ' + nft.balance / 1e18 + '</option>\n';
			//========================//
			// var nft = getOwned(nfts[i]); //get owned by index method
			// //dropdown menu
			// htmlWD += '<option class="dropdown-item">Gem #' + nft.tokenId + ' :Lvl ' + nftStat.level + ' :Bal ' + nftStat.balance / 1e18 + '</option>\n';
		}
		one.innerHTML = htmlWD;
		two.innerHTML = htmlWD;
		three.innerHTML = htmlWD;
		withD.innerHTML = htmlWD;

		dropDownListener();
	}
	catch (error) {
		console.log("Get owned gem error:", error);
	}
}

/* ----------------------------
*	Dropdown menu setup
* ----------------------------*/
async function dropDownListener() {

	//Add listeners
	$('#dropdownMenu1 option').on('click', function () {
		// console.log($(this).html());
		document.getElementById("dropdownMenuButton1").textContent = $(this).html();
		preventDupes();

		// var token = parseDropSelection($(this).html());
		// showImage(1, token);
	});

	$('#dropdownMenu2 option').on('click', function () {
		//console.log($(this).html());
		document.getElementById("dropdownMenuButton2").textContent = $(this).html();
		preventDupes();

		// var token = parseDropSelection($(this).html());
		// showImage(2, token);

	});

	$('#dropdownMenu3 option').on('click', function () {
		// console.log($(this).html());
		document.getElementById("dropdownMenuButton3").textContent = $(this).html();
		preventDupes();

		// var token = parseDropSelection($(this).html());
		// showImage(3, token);
	});

	$('#dropdownWithdraw option').on('click', function () {
		document.getElementById("dropdownMenuButtonWithdraw").textContent = $(this).html();
	});
	// console.log("Dropdown ready");
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

async function updateData() {
	document.getElementById("loader").classList.toggle("hide-loader");
	sendAlert("...Getting Owned Gems...");
	await dropDownSetup();
	document.getElementById("loader").classList.toggle("hide-loader");

	await reloadStats();
	sendAlert("Ready");
}
/* ----------------------------
*	Game Stats
* ----------------------------*/
async function getDataContract() {
	try {
		await updateData();
		console.log("Ready");
	} catch (e) {
		console.log(e);
		sendAlert("Error getting data. Please reload", red)
	}
}
function parseError(err) {
	var text = err + '';
	var error = text.slice(text.indexOf('{') - 1, text.lastIndexOf('}') + 1);
	var message = JSON.parse(error).message;
	return message;
}

function parseDropSelection(text, a, b) {
	// var token = text.slice(text.indexOf('#') + 1, text.lastIndexOf(':Lvl'));
	var token = text.slice(text.indexOf(a) + 1, text.lastIndexOf(b));
	return token;
}

function sendAlert(message) {
	var alert = document.getElementById("alert-txt").innerHTML;
	alert = message;
	document.getElementById("alert-txt").innerHTML = alert;
}
function sendAlertPerm(message, red) {
	var alert = document.getElementById("alert-perm");
	if (red == 'red') {
		alert.style.cssText = 'background-color:rgb(238, 9, 121, 0.5);';
	} else {
		alert.style.cssText = 'background-color:none;';
	}
	alert.innerHTML = message;
}

$(document).ready(function () {
	loadWeb3();
})
window.addEventListener('contractLoaded', () => {
	getDataContract();
});

$('#connectButton').click(function () {
	connect();
});
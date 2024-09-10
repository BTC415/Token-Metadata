import fetch from 'node-fetch'

const apiKey = 'demo';
const fetchURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

const tokenAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenMetadata",
  "headers": {
    "Content-Type": "application/json"
  },
  "params": [
    `${tokenAddr}`
  ],
  "id": 42
})

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

//Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json)
  .then(response => JSON.stringify(response['result'], null, 2))
  .then(result => console.log(result))
  .catch(err => console.log(err))
//alchemy-token-api/axios-script.js
import axios from "axios";

const apiKey = 'demo';
const baseURL = `https://eth.mainnet.g.alchemy.com/v2/${apiKey}`;

const tokenAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

var data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenMetadata",
  "params": [
    `${tokenAddr}`
  ],
  "id": 42
})

var config = {
  method: 'post',
  url: baseURL,
  headers: {
    'Content-Type': "application/json"
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data.result, null, 2))
  })
  .catch(function (error) {
    console.log(error)
  })

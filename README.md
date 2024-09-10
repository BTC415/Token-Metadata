# Token-Metadata
This project gets token metadata from Ethereum Mainnet using Alchemy SDK, Node, Axios.

Often when you are a DeFi app aggregating several tokens on your platform (like [Uniswap](https://uniswap.org/)), or an analytics app displaying data about thousands of tokens (like [CoinGecko](https://www.coingecko.com/)) - you need to show the metadata for several tokens. The metadata includes important fields like the token's name, symbol, and logo.

## Alchemy SDK (Recommended)
Alchemy's Token API endpoint getTokenMetadata can come in handy for use-cases like that! We are going to fetch the metadata for the USDT token.
For this particular example, we're going to fetch the metadata for USDT token which has the contract address ``0xdAC17F958D2ee523a2206206994597C13D831ec7``

## Node - Fetch
Optionally we can use Node fetching method for this.

## Axios
Optionally we can use Axios for this.

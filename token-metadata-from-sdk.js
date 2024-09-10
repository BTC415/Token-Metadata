import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "<-- ALCHEMY APP API KEY -->",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const metadata = await alchemy.core.getTokenMetadata(
  "0xdAC17F958D2ee523a2206206994597C13D831ec7"
);

console.log("Token Metadata ------> ", metadata)

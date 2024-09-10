import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "<-- ALCHEMY APP API KEY -->",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const metadata = await alchemy.core.getTokenMetadata(
  "0x514910771af9ca656af840dff83e8264ecf986ca"
);

console.log("Token Metadata ------> ", metadata)

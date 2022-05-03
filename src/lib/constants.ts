import { EtherscanGasParams } from "@etherTrack/types";

/** The API endpoint for all etherscan queries*/
export const ETHERSCAN_APIENDPOINT = "https://api.etherscan.io/api";

/** Params for fetching gas price related data from Etherscan.io */
export const GASPRICE_PARAMS: EtherscanGasParams = {
  module: "gastracker",
  action: "gasoracle",
  apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
};

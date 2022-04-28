export interface EtherscanGasPriceRes {
  status: "1" | "0";
  message: "OK" | "NOTOK";
  result: EtherscanGasResultType;
}

export type EtherscanGasResultType = {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
};

export type EtherscanGasParams = {
  module: "gastracker";
  action: "gasestimate" | "gasoracle";
  apiKey: string;
};

export interface EtherscanGasEtimateParams extends EtherscanGasParams {
  gasPrice: "string";
}

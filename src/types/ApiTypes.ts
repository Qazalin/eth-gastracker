export interface EtherscanGeneralRes {
  status: "1" | "0";
  message: "OK" | "NOTOK";
  result: any; // The result is extended in the following interfaces
}

export interface EtherscanGasPriceRes extends EtherscanGeneralRes {
  result: EtherscanGasResultType;
}

export interface EtherscanGasEstimateRes extends EtherscanGeneralRes {
  result: string;
}

export type EtherscanGasResultType = {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
};

export interface EtherscanGasParams extends Record<string, string> {
  module: "gastracker";
  action: "gasestimate" | "gasoracle";
  apiKey: string;
}

export interface EtherscanGasEtimateParams extends EtherscanGasParams {
  gasPrice: string;
}

export interface EthExchangeRateRes {
  USD: number;
  EUR: number;
}

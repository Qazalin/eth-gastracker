export interface EtherscanGasPriceRes {
  status: "1" | "0";
  message: "OK" | "NOTOK";
  result: EtherscanGasResultType;
}

type EtherscanGasResultType = {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
};

import useApi from "@etherTrack/lib";
import {
  EtherscanGasEstimateRes,
  EtherscanGasEtimateParams,
} from "@etherTrack/types";

export function useGasEtimator(gasPrice: string) {
  const gasEstimateParams: EtherscanGasEtimateParams = {
    module: "gastracker",
    action: "gasestimate",
    gasPrice,
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };
  const { error: gasEstimateError, data: gasEstimate } = useApi<
    EtherscanGasEtimateParams,
    EtherscanGasEstimateRes
  >(apiEndpoint, gasEstimateParams);
}

import { useApi } from "@etherTrack/lib";
import {
  EtherscanGasEstimateRes,
  EtherscanGasEtimateParams,
} from "@etherTrack/types/ApiTypes";
import { APIENDPOINT } from "@etherTrack/lib";

/**
 * Function to estimate confirmation time
 *
 * @param gasPrice the gas price to be payed
 * @returns EtherscanGasEstimateRes
 */
export function useGasEtimator(gasPrice: string | undefined) {
  const gasEstimateParams: EtherscanGasEtimateParams = {
    module: "gastracker",
    action: "gasestimate",
    gasPrice: gasPrice,
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };
  const { error, data } = useApi<
    EtherscanGasEtimateParams,
    EtherscanGasEstimateRes
  >(APIENDPOINT, gasEstimateParams);

  return {
    data,
    loading: !error && !data,
    error: error,
  };
}

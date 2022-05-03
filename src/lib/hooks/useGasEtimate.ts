import { useApi } from "@etherTrack/lib";
import {
  EtherscanGasEstimateRes,
  EtherscanGasEtimateParams,
} from "@etherTrack/types/ApiTypes";
import { ETHERSCAN_APIENDPOINT, gweiToWei } from "@etherTrack/lib";
import { etherscanFetcher } from "../etherscanFetcher";

/**
 * Function to estimate confirmation time
 *
 * @param gasPrice the gas price to be payed (in gwei)
 * @returns EtherscanGasEstimateRes
 */
export function useGasEtimator(gasPrice: string | undefined) {
  let gasEstimateParams: EtherscanGasEtimateParams;
  if (gasPrice) {
    gasEstimateParams = {
      module: "gastracker",
      action: "gasestimate",
      gasPrice: gweiToWei(gasPrice),
      apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
    };
  }
  const { error, data } = useApi<
    EtherscanGasEtimateParams,
    EtherscanGasEstimateRes
  >(ETHERSCAN_APIENDPOINT, gasEstimateParams, etherscanFetcher);

  /* handle max rate limit of etherscan */
  if (data?.result === "Max rate limit reached") {
    throw new Error("Max rate limit reached");
  }
  return {
    data,
    loading: !error && !data,
    error: error,
  };
}

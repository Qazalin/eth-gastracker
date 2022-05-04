import useSWR from "swr";
import { EthExchangeRateRes } from "@etherTrack/types";
import { basicFetcher } from "../basicFetcher";

/**
 * Hook to fetch ETH exchange rate in USD and EUR
 */
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useEthExchangeRate = () => {
  const { error, data } = useSWR<EthExchangeRateRes>(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR",
    fetcher
  );

  return {
    exchangeRate: data,
    isLoading: !error && !data,
    isError: error,
  };
};

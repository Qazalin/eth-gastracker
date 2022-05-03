import useSWR from "swr";

export const useEthExchangeRate = () => {
  const { error, data } = useSWR(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR"
  );
};

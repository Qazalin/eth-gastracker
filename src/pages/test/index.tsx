import { Layout, Countdown } from "@etherTrack/components";
import {
  APIENDPOINT,
  useApi,
  useGasEtimator,
  etherscanFetcher,
} from "@etherTrack/lib";
import { GasInfoLayoutProps } from "@etherTrack/types";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
} from "@etherTrack/types/ApiTypes";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";

const Test = () => {
  const gasPriceParams: EtherscanGasParams = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };
  const { error: gasPriceError, data: gasPrice } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >(APIENDPOINT, gasPriceParams, etherscanFetcher);
  if (gasPrice) {
    console.log(gasPrice);
  }
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        dedupingInterval: 50,
        refreshWhenHidden: true,
      }}
    >
      <Countdown time={5} />
    </SWRConfig>
  );
};
export default Test;

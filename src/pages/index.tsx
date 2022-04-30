import { Layout, GasInfoLayout } from "@etherTrack/components";
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

const Index = ({ fallback }) => {
  /* handle global states based on individual queries */
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* First get the gas prices */
  const gasPriceParams: EtherscanGasParams = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };
  const { error: gasPriceError, data: gasPrice } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >(APIENDPOINT, gasPriceParams, etherscanFetcher);

  /* Next, based on each of the three gas prices,
   * fetch the respective estimated confirmation time */
  const { error: safeGasError, data: safeGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.SafeGasPrice : null
  );
  const { error: proposeGasError, data: proposeGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.ProposeGasPrice : null
  );
  const { error: fastGasError, data: fastGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.FastGasPrice : null
  );
  /* The final object that will be exposed to the UI component */
  let EtherscanRes: GasInfoLayoutProps | undefined;
  if (gasPrice && safeGasEstimate && proposeGasEstimate && fastGasEstimate) {
    EtherscanRes = {
      SafeGasPrice: gasPrice.result.SafeGasPrice,
      SafeGasEstimate: fastGasEstimate.result,
      ProposeGasPrice: gasPrice.result.ProposeGasPrice,
      ProposeGasEstimate: proposeGasEstimate.result,
      FastGasPrice: gasPrice.result.FastGasPrice,
      FastGasEstimate: fastGasEstimate.result,
    };
  } else {
    EtherscanRes = null;
  }

  useEffect(() => {
    console.log("refetched!", EtherscanRes);
  }, [EtherscanRes]);

  return (
    // use the ssr fetched data as fallback
    // data should update every 5 seconds
    <SWRConfig
      value={{
        fallback,
        refreshInterval: 2000,
        dedupingInterval: 1000,
        // handle global error and loading states
        onError: () => {
          setIsError(true);
        },
        onLoadingSlow: () => {
          setIsLoading(true);
        },
        loadingTimeout: 1000,
      }}
    >
      <Layout>
        <GasInfoLayout
          isError={isError}
          isLoading={isLoading}
          data={EtherscanRes}
        />
      </Layout>
    </SWRConfig>
  );
};

export default Index;

/* Data pre-fetching using SSR */
export async function getServerSideProps() {
  const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.EHERSCAN_API_KEY}`;
  const res = await fetch(gasApiEndpoint);
  const data: EtherscanGasPriceRes = await res.json();
  return {
    props: {
      fallback: {
        "https://api.etherscan.io/api": data,
      },
    },
  };
}

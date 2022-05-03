// Modules //
import { SWRConfig } from "swr";
import { Flex, Text } from "@chakra-ui/react";

// API Fetching related //
import {
  ETHERSCAN_APIENDPOINT,
  GASPRICE_PARAMS,
  useApi,
  useGasEtimator,
  etherscanFetcher,
} from "@etherTrack/lib";

// Types //
import { IsolatedLayoutProps } from "@etherTrack/types";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
  EtherscanGasResultType,
} from "@etherTrack/types/ApiTypes";

// Components //
import {
  LayoutManager,
  GasInfoLayout,
  ConfirmationChartLayout,
  NetworkStatsLayout,
} from "@etherTrack/layouts";
import { Countdown } from "@etherTrack/components";
import { GetServerSideProps } from "next";
import { basicFetcher } from "@etherTrack/lib/basicFetcher";

const Index = ({ fallback }) => {
  /* First get the gas prices */
  const { error: _gasPriceError, data: gasPrice } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >(ETHERSCAN_APIENDPOINT, GASPRICE_PARAMS, etherscanFetcher);

  /* Next, based on each of the three gas prices,
   * fetch the respective estimated confirmation time */
  const { error: _safeGasError, data: safeGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.SafeGasPrice : null
  );
  const { error: _proposeGasError, data: proposeGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.ProposeGasPrice : null
  );
  const { error: _fastGasError, data: fastGasEstimate } = useGasEtimator(
    gasPrice ? gasPrice.result.FastGasPrice : null
  );

  /* The final object that will be exposed to the UI component */
  let EtherscanRes: IsolatedLayoutProps | undefined;
  if (gasPrice && safeGasEstimate && proposeGasEstimate && fastGasEstimate) {
    const gasUsedRatio = gasPrice.result.gasUsedRatio.split(",").map(Number);
    EtherscanRes = {
      SafeGasPrice: parseInt(gasPrice.result.SafeGasPrice),
      SafeGasEstimate: parseInt(fastGasEstimate.result),
      ProposeGasPrice: parseInt(gasPrice.result.ProposeGasPrice),
      ProposeGasEstimate: parseInt(proposeGasEstimate.result),
      FastGasPrice: parseInt(gasPrice.result.FastGasPrice),
      FastGasEstimate: parseInt(fastGasEstimate.result),
      suggestBaseFee: parseInt(gasPrice.result.suggestBaseFee),
      gasUsedRatio: gasUsedRatio,
    };
  } else {
    EtherscanRes = null;
  }

  /* last updated date and time */
  const d = new Date();
  const lastUpdated = d.toISOString();
  const dateSplits = lastUpdated.split("T");
  const cleanDate = dateSplits[0] + " " + dateSplits[1].slice(0, 8); // format: yy-mm-dd hh-mm-ss

  return (
    // use the ssr fetched data as fallback
    // data should update every 5 seconds
    <SWRConfig
      value={{
        fallback,
        refreshInterval: 5000,
        dedupingInterval: 1000,
        fetcher: basicFetcher,
      }}
    >
      <Flex
        justifyContent="space-between"
        fontSize="1.2rem"
        mx="20px"
        mb="20px"
      >
        <Text>last updated: {cleanDate} UTC</Text>
        <Countdown time={5} />
      </Flex>
      <LayoutManager
        gasPriceLayout={<GasInfoLayout data={EtherscanRes} />}
        barChartLayout={<ConfirmationChartLayout data={EtherscanRes} />}
        statsLayout={<NetworkStatsLayout data={EtherscanRes} />}
        isLoading={EtherscanRes === null}
      />
    </SWRConfig>
  );
};

export default Index;

/* Data pre-fetching using SSR */
export const getServerSideProps: GetServerSideProps = async () => {
  const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.EHERSCAN_API_KEY}`;
  const res = await fetch(gasApiEndpoint);
  const data: EtherscanGasResultType = await res.json();
  return {
    props: {
      fallback: {
        "https://api.etherscan.io/api": data,
      },
    },
  };
};

import { Layout, GasInfoLayout } from "@etherTrack/components";
import { useApi } from "@etherTrack/lib";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
} from "@etherTrack/types/ApiTypes";
import useSWR, { SWRConfig } from "swr";

const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`;

const Index = ({ fallback }) => {
  const apiEndpoint = "https://api.etherscan.io/api";
  const params: EtherscanGasParams = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };

  // data should update every 5 seconds
  const { loading, error, data } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >(apiEndpoint, params, { refreshInterval: 5000 });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <GasInfoLayout data={data.result} />
      </Layout>
    </SWRConfig>
  );
};

export default Index;

export async function getServerSideProps() {
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

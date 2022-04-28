import { Layout, GasPriceLayout } from "@etherTrack/components";
import useApi from "@etherTrack/lib/fetcher";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
} from "@etherTrack/types/ApiTypes";
import useSWR, { SWRConfig } from "swr";

const Index = ({ ssr }) => {
  const params: EtherscanGasParams = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };
  const { loading, error, data } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >("https://api.etherscan.io/api", params);

  if (loading) return <h1>loding..</h1>;
  console.log(data);
  return (
    <Layout>
      <h1>hello world</h1>
    </Layout>
  );
};

export default Index;

export async function getServerSideProps() {
  const baseUrl = "https://api.etherscan.io/api";
  const res = await fetch(
    baseUrl +
      "?" +
      new URLSearchParams({
        module: "gastracker",
        action: "gasoracle",
        apiKey: process.env.ETHERSCAN_API_KEY,
      }),
    {
      method: "GET",
    }
  );
  const data: EtherscanGasPriceRes = await res.json();
  return {
    props: {
      ssr: data,
    },
  };
}

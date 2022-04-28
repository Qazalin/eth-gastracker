import { Layout, GasPriceLayout } from "@etherTrack/components";
import useApi from "@etherTrack/lib/fetcher";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
} from "@etherTrack/types/ApiTypes";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`;

const Index = ({ fallback }) => {
  const params: EtherscanGasParams = {
    module: "gastracker",
    action: "gasoracle",
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN,
  };

  // data should update every 5 seconds
  const { loading, error, data } = useApi<
    EtherscanGasParams,
    EtherscanGasPriceRes
  >("https://api.etherscan.io/api", params, { refreshInterval: 5000 });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  console.log({ fallback });
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <GasPriceLayout data={data.result} />
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
        gasApiEndpoint: data,
      },
    },
  };
}

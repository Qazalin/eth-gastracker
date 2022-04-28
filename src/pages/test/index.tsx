import { Layout, GasPriceLayout } from "@etherTrack/components";
import { EtherscanGasPriceRes } from "@etherTrack/types/ApiTypes";
import useSWR, { SWRConfig } from "swr";

const Index = ({ data }) => {
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
      data,
    },
  };
}

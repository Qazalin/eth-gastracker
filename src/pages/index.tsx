import { Center, Text, Button } from "@chakra-ui/react";
import { Layout, GasView, DarkModeSwitch } from "@etherTrack/components";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`;

const Index = ({ fallback }) => {
  const { data, error } = useSWR(
    gasApiEndpoint,
    fetcher,
    { refreshInterval: 5000 } // data should update every 5 seconds
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <DarkModeSwitch />
        <Center flexDir="column" mt="50%">
          {data.result.LastBlock}
        </Center>
      </Layout>
    </SWRConfig>
  );
};

export default Index;

export async function getServerSideProps() {
  const res = await fetch(gasApiEndpoint);
  const data = await res.json();
  return {
    props: {
      fallback: {
        gasApiEndpoint: data,
      },
    },
  };
}

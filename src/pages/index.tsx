import { Center, Text, Button } from "@chakra-ui/react";
import { Layout, GasView, DarkModeSwitch } from "@etherTrack/components";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`,
    fetcher,
    { refreshInterval: 5000 } // data should update every 5 seconds
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <Layout>
      <DarkModeSwitch />
      <Center flexDir="column" mt="50%">
        {data.result.LastBlock}
      </Center>
    </Layout>
  );
};

export default Index;

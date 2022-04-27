import { Center, Text, Button } from "@chakra-ui/react";
import { Layout, GasView, DarkModeSwitch } from "@etherTrack/components";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState(null); // Data from etherscan
  const [isLoading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false); // Indicates wether to update the component or not with the new data

  const fetchGasPrice = () => {
    /* it re-fetches the data from etherscan */
    fetch(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  /* Only re-fetch the data on-demand */
  useEffect(() => {
    if (isUpdate && !isLoading) {
      fetchGasPrice();
    }
  }, [isUpdate, isLoading]);

  /* There's a 6 second wait interval before fetching data */
  useEffect(() => {
    var timerID = setInterval(async () => {
      setIsUpdate(!isUpdate);
    }, 6000);
    return () => clearInterval(timerID);
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <Layout>
      <DarkModeSwitch />
      <Center flexDir="column" mt="50%">
        <button onClick={fetchGasPrice}>Refresh component</button>
      </Center>
    </Layout>
  );
};

export default Index;

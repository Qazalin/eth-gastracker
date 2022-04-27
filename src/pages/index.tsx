import { Center, Text, Button } from "@chakra-ui/react";
import { Layout, GasView, DarkModeSwitch } from "@etherTrack/components";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Index = ({ time }) => {
  const [gasPrice, setGasPrice] = useState(time);
  function revalidate() {
    fetch("/api/revalidate");
    setGasPrice(time);
    console.log(time);
  }

  /* useEffect(() => {
    var timerID = setInterval(async () => {
      console.log("time is ", time);
      revalidate();
    }, 3000);
    return () => clearInterval(timerID);
  }); */

  return (
    <Layout>
      <DarkModeSwitch />
      <Center flexDir="column" mt="50%">
        <GasView gasprice={gasPrice} />
        <Button onClick={() => revalidate()}>{time}</Button>
      </Center>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    // revalidate: 5, // revalidate the data every 5 seconds
  };
}

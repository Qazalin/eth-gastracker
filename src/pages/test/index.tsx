import { Flex, HStack, Center, Text, Button } from "@chakra-ui/react";
import { Layout, GasPriceLayout } from "@etherTrack/components";
import { EtherscanGasPriceRes } from "@etherTrack/types/ApiTypes";

const Index = () => {
  const data: EtherscanGasPriceRes = {
    status: "1",
    message: "OK",
    result: {
      LastBlock: "14670971",
      SafeGasPrice: "37",
      ProposeGasPrice: "37",
      FastGasPrice: "38",
      suggestBaseFee: "36.240551136",
      gasUsedRatio:
        "0.9997641,0.659677333333333,0.1880484,0.195271366666667,0.448244766666667",
    },
  };

  return (
    <Layout>
      <GasPriceLayout data={data.result} />
    </Layout>
  );
};

export default Index;

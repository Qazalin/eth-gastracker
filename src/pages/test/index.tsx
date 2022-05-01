import { GasInfoLayout } from "@etherTrack/components";
import { MainLayout } from "@etherTrack/components/layout/main";
import { GasInfoLayoutProps } from "@etherTrack/types";
import { Text } from "@chakra-ui/react";

const Test = () => {
  const dummy: GasInfoLayoutProps = {
    SafeGasPrice: "213",
    SafeGasEstimate: "45",
    ProposeGasPrice: "213",
    ProposeGasEstimate: "195",
    FastGasPrice: "215",
    FastGasEstimate: "45",
  };
  return (
    <MainLayout>
      <Text>hello world</Text>
    </MainLayout>
  );
};
export default Test;

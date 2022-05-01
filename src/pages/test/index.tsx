import {
  LayoutManager,
  GasInfoLayout,
} from "@etherTrack/components/layouts/main";
import { GasInfoLayoutProps } from "@etherTrack/types";
import { Box } from "@chakra-ui/react";
import { DonutChart } from "@etherTrack/components/charts";

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
    <LayoutManager
      gasPrice={<GasInfoLayout />}
      barChart={<Box />}
      stats={<Box />}
    />
  );
};
export default Test;

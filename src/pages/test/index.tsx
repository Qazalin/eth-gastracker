import {
  LayoutManager,
  GasInfoLayout,
  ConfirmationChartLayout,
} from "@etherTrack/components/layouts/main";
import { GasInfoLayoutProps } from "@etherTrack/types";
import { Box } from "@chakra-ui/react";

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
      gasPrice={<GasInfoLayout data={dummy} />}
      barChart={<ConfirmationChartLayout />}
      stats={<Box />}
    />
  );
};
export default Test;

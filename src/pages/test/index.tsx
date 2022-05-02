import {
  LayoutManager,
  GasInfoLayout,
  ConfirmationChartLayout,
} from "@etherTrack/components/layouts/main";
import { GasInfoLayoutProps } from "@etherTrack/types";
import { Box } from "@chakra-ui/react";
import { ConfirmationTimeChart } from "@etherTrack/components/charts";

const Test = () => {
  const dummy: GasInfoLayoutProps = {
    SafeGasPrice: "213",
    SafeGasEstimate: "45",
    ProposeGasPrice: "213",
    ProposeGasEstimate: "195",
    FastGasPrice: "215",
    FastGasEstimate: "45",
  };
  const barChartData: [number, number, number] = [134, 235, 100];
  return (
    <LayoutManager
      gasPrice={<GasInfoLayout data={dummy} />}
      barChart={<ConfirmationChartLayout data={barChartData} />}
      stats={<Box />}
    />
  );
};
export default Test;

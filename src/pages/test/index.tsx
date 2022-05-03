import {
  LayoutManager,
  GasInfoLayout,
  ConfirmationChartLayout,
} from "@etherTrack/layouts/main";
import { Box } from "@chakra-ui/react";
import { ConfirmationTimeChart } from "@etherTrack/components/charts";

const Test = () => {
  const dummy = {
    SafeGasPrice: "213",
    SafeGasEstimate: "45",
    ProposeGasPrice: "213",
    ProposeGasEstimate: "195",
    FastGasPrice: "215",
    FastGasEstimate: "45",
  };
  const barChartData: [number, number, number] = [134, 235, 100];
  return <h1>first test</h1>;
};
export default Test;

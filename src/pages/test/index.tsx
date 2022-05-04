import { NetworkTrafficBar } from "@etherTrack/components/charts";
import { ConfirmationChartLayout } from "@etherTrack/layouts";

const Test = () => {
  const dummy = {
    SafeGasPrice: parseInt("213"),
    SafeGasEstimate: parseInt("45"),
    ProposeGasPrice: parseInt("213"),
    ProposeGasEstimate: parseInt("195"),
    FastGasPrice: parseInt("215"),
    FastGasEstimate: parseInt("45"),
  };
  const barChartData: [number, number, number] = [134, 235, 100];
  return <ConfirmationChartLayout data={dummy} />;
};
export default Test;

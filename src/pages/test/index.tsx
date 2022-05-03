import { NetworkTrafficBar } from "@etherTrack/components/charts";

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
  return <NetworkTrafficBar avgTraffic={0.3} />;
};
export default Test;

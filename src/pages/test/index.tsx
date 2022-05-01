import { GasInfoLayout } from "@etherTrack/components";
import { GasInfoLayoutProps } from "@etherTrack/types";
import {
  EtherscanGasParams,
  EtherscanGasPriceRes,
} from "@etherTrack/types/ApiTypes";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr";

const Test = () => {
  const dummy: GasInfoLayoutProps = {
    SafeGasPrice: "213",
    SafeGasEstimate: "45",
    ProposeGasPrice: "213",
    ProposeGasEstimate: "195",
    FastGasPrice: "215",
    FastGasEstimate: "45",
  };
  return <GasInfoLayout data={dummy} isError={false} isLoading={false} />;
};
export default Test;

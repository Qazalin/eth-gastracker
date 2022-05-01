import { Box, HStack, Flex, Text } from "@chakra-ui/react";
import { GasView, Countdown } from "@etherTrack/components";
import { GasInfoLayoutProps } from "@etherTrack/types";
import { getPercentageDiff } from "@etherTrack/utils";
export const GasInfoLayout: React.FC<{
  data: GasInfoLayoutProps | undefined;
}> = ({ data }) => {
  if (data) {
    const gasPrices = [
      parseInt(data.SafeGasPrice),
      parseInt(data.ProposeGasPrice),
      parseInt(data.FastGasPrice),
    ];
    const estimatedTimes = [
      parseInt(data.SafeGasEstimate),
      parseInt(data.ProposeGasEstimate),
      parseInt(data.FastGasEstimate),
    ];

    return (
      <HStack w="100%" h="100%">
        <GasView
          title="Low"
          gasPrice={gasPrices[0]}
          estimatedTime={estimatedTimes[0]}
          percentageDiff={getPercentageDiff(gasPrices, gasPrices[0])}
        />
        <GasView
          title="Average"
          gasPrice={gasPrices[1]}
          estimatedTime={estimatedTimes[1]}
          percentageDiff={getPercentageDiff(gasPrices, gasPrices[1])}
        />
        <GasView
          title="High"
          gasPrice={gasPrices[2]}
          estimatedTime={estimatedTimes[2]}
          percentageDiff={getPercentageDiff(gasPrices, gasPrices[2])}
        />
      </HStack>
    );
  } else {
    return <h1>skeleton layout</h1>;
  }
};

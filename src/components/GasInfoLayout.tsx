import { HStack, Box, Text, useToast } from "@chakra-ui/react";
import { GasView } from "@etherTrack/components";
import { GasViewGhost } from "@etherTrack/components/ghost";
import { GasInfoLayoutProps } from "@etherTrack/types";

export const GasInfoLayout: React.FC<{
  data: GasInfoLayoutProps | undefined;
  isError: boolean;
  isLoading: boolean;
  lastUpdated: string;
}> = ({ data, isError, isLoading, lastUpdated }) => {
  const toast = useToast();
  if (isError) {
    return <h1>sorry, there was an error</h1>;
  } else if (data) {
    const dateSplits = lastUpdated.split("T");
    const cleanDate = dateSplits[0] + " " + dateSplits[1].slice(0, 8); // format: yy-mm-dd hh-mm-ss

    return (
      <Box w="100%" h="100%">
        <Text>last updated: {cleanDate}</Text>
        <HStack spacing="10px" w="100%" h="50%">
          <GasView
            title="Low"
            gasPrice={data.SafeGasPrice}
            estimatedTime={data.SafeGasEstimate}
          />
          <GasView
            title="Average"
            gasPrice={data.ProposeGasPrice}
            estimatedTime={data.ProposeGasEstimate}
          />
          <GasView
            title="High"
            gasPrice={data.FastGasPrice}
            estimatedTime={data.FastGasEstimate}
          />
        </HStack>
      </Box>
    );
  } else {
    console.log("loading: ", isLoading);
    return (
      <HStack spacing="10px" w="100%" h="50%">
        <GasViewGhost />
        <GasViewGhost />
        <GasViewGhost />
      </HStack>
    );
  }
};

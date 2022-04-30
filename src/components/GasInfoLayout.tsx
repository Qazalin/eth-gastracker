import { HStack, Box, Text, useToast, Flex } from "@chakra-ui/react";
import { GasView, Countdown } from "@etherTrack/components";
import { GasViewGhost } from "@etherTrack/components/ghost";
import { GasInfoLayoutProps } from "@etherTrack/types";

export const GasInfoLayout: React.FC<{
  data: GasInfoLayoutProps | undefined;
  isError: boolean;
  isLoading: boolean;
}> = ({ data, isError, isLoading }) => {
  const toast = useToast();
  if (isError) {
    return <h1>sorry, there was an error</h1>;
  } else if (data) {
    const d = new Date();
    const lastUpdated = d.toISOString();
    const dateSplits = lastUpdated.split("T");
    const cleanDate = dateSplits[0] + " " + dateSplits[1].slice(0, 8); // format: yy-mm-dd hh-mm-ss

    return (
      <Box w="100%" h="100%">
        <Flex
          justifyContent="space-between"
          fontSize="1.2rem"
          mx="20px"
          mb="20px"
        >
          <Text>last updated: {cleanDate}</Text>
          <Countdown time={5} />
        </Flex>
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
    return (
      <HStack spacing="10px" w="100%" h="50%">
        <GasViewGhost />
        <GasViewGhost />
        <GasViewGhost />
      </HStack>
    );
  }
};

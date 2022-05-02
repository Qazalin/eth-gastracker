import { Box, Flex, Text } from "@chakra-ui/react";
import { ConfirmationTimeChart } from "@etherTrack/components/charts";
import {
  IsolatedLayoutProps,
  ConfirmationTimeChartProps,
} from "@etherTrack/types";

/**
 * Illustrates the confirmation time using a bar chart for each gas price range
 * @param data The data from Etherscan
 */
export const ConfirmationChartLayout: React.FC<{
  data: IsolatedLayoutProps;
}> = ({ data }) => {
  const barChartData: ConfirmationTimeChartProps = [
    data.SafeGasEstimate,
    data.ProposeGasEstimate,
    data.FastGasEstimate,
  ];

  return (
    <Box w="100%" h="100%" textAlign="center">
      <Box mt="20px" mb="40px" mx="20px">
        <Text variant="h2">Estimated Confirmation Time</Text>
        <Text
          _before={{
            backgroundColor: "#FC759E",
            padding: "0 10px",
            borderRadius: "0%",
            mr: "5px",
            content: `" "`,
          }}
        >
          Time (seconds)
        </Text>
      </Box>
      <ConfirmationTimeChart data={barChartData} />
    </Box>
  );
};

import { Box, Flex, Text } from "@chakra-ui/react";
import { ConfirmationTimeChart } from "@etherTrack/components/charts";

export const ConfirmationChartLayout = () => {
  return (
    <Box w="100%" h="100%" textAlign="center">
      <Box mt="20px" mb="40px" mx="20px">
        <Text variant="h2">Estimated Confirmation Time</Text>
        <Text
          _before={{
            backgroundColor: "green",
            padding: "0 10px",
            borderRadius: "50%",
            mr: "5px",
            content: `" "`,
          }}
        >
          Time (seconds)
        </Text>
      </Box>
      <ConfirmationTimeChart />
    </Box>
  );
};

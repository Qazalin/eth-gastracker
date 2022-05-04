import { Center, Box, Text } from "@chakra-ui/react";
import {
  IsolatedLayoutProps,
  NetworkStatsLayoutProps,
} from "@etherTrack/types";

import { NetworkTrafficBar } from "@etherTrack/components/charts";

export const NetworkStatsLayout: React.FC<{ data: IsolatedLayoutProps }> = ({
  data,
}) => {
  const average = (arr: number[]) =>
    arr.reduce((p, c) => p + c, 0) / arr.length;
  const result = average(data.gasUsedRatio);
  const stats: "Low" | "Stable" | "Busy" =
    result > 0.6 ? "Busy" : result < 0.4 ? "Low" : "Stable";
  return (
    <Box textAlign="center" textDecor="capitalize" my="40px">
      <Text variant="h1">Network stats</Text>
      <Box mt="50px" mb="20%">
        <Text variant="h2" mb="20px">
          Suggested Base Fee
        </Text>
        <Text variant="h2">{data.suggestBaseFee} gwei</Text>
      </Box>
      <Center flexDir="column">
        <Text variant="h2" mb="20px">
          Average Network Traffic
        </Text>
        <Box w="70%" h="20px" display="flex" justifyContent="center">
          <NetworkTrafficBar avgTraffic={result} />
        </Box>
        <Text variant="h3" mt="10px">
          {stats}
        </Text>
      </Center>
    </Box>
  );
};

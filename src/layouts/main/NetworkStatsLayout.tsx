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
      <Box mt="50px" mb="200px">
        <Text variant="h2" fontSize="1.7rem" mb="20px">
          Suggested Base Fee
        </Text>
        <Text variant="h2" fontSize="1.3rem">
          {data.suggestBaseFee} gwei
        </Text>
      </Box>
      <Center flexDir="column">
        <Text variant="h2" fontSize="1.7rem" mb="20px">
          Average Network Traffic
        </Text>
        <Box w="500px" h="100px" display="flex" justifyContent="center">
          <NetworkTrafficBar avgTraffic={result} />
        </Box>
        <Text variant="h3">{stats}</Text>
      </Center>
    </Box>
  );
};

import { Flex, Box, Text } from "@chakra-ui/react";
import {
  IsolatedLayoutProps,
  NetworkStatsLayoutProps,
} from "@etherTrack/types";

export const NetworkStatsLayout: React.FC<{ data: IsolatedLayoutProps }> = ({
  data,
}) => {
  const average = (arr: number[]) =>
    arr.reduce((p, c) => p + c, 0) / arr.length;
  const result = average(data.gasUsedRatio);
  return (
    <Box textAlign="center" textDecor="capitalize">
      <Text variant="h1">Network stats</Text>
      <Box mt="50px">
        <Text variant="h2" fontSize="1.7rem">
          Suggested Base Fee
        </Text>
        <Text>{data.suggestBaseFee}</Text>
      </Box>
      <Box>
        <Text>Average Network Traffic</Text>
        <Text>{result}</Text>
      </Box>
    </Box>
  );
};

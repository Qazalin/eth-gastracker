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
      <Text>Network stats</Text>
      <Box>
        <Text>Suggested Base Fee</Text>
        <Text>{data.suggestBaseFee}</Text>
      </Box>
      <Box>
        <Text>Average Network Traffic</Text>
        <Text>{result}</Text>
      </Box>
    </Box>
  );
};

import { Flex, VStack, Box } from "@chakra-ui/react";
import { MainLayoutProps } from "@etherTrack/types";
export const DesktopLayout: React.FC<MainLayoutProps> = ({
  gasPrice,
  barChart,
  stats,
}) => {
  return (
    <Flex w="100%" h="100%" borderRadius="10px">
      <VStack w="50%" h="100%" borderRadius="inherit">
        <Box
          borderRadius="inherit"
          w="100%"
          h="20%"
          bg="bg1"
          mb="20px"
          p="20px"
        >
          {gasPrice}
        </Box>
        <Box borderRadius="inherit" w="100%" h="80%" bg="bg1">
          {barChart}
        </Box>
      </VStack>
      <Box borderRadius="inherit" w="50%" h="100%" ml="20px" bg="bg1">
        {stats}
      </Box>
    </Flex>
  );
};

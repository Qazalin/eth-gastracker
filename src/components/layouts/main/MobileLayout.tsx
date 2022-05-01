import React from "react";
import { MainLayoutProps } from "@etherTrack/types";
import { VStack, Box } from "@chakra-ui/react";

export const MobileLayout: React.FC<MainLayoutProps> = ({
  gasPrice,
  barChart,
  stats,
}) => {
  return (
    <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
      <Box borderRadius="inherit" w="100%" h="20%" bg="bg1" p="20px">
        {gasPrice}
      </Box>
      <Box borderRadius="inherit" w="100%" h="80%" bg="bg1">
        {barChart}
      </Box>
      <Box borderRadius="inherit" w="100%" h="100%" ml="20px" bg="bg1">
        {stats}
      </Box>
    </VStack>
  );
};

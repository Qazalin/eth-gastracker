import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { LayoutPropType } from "@etherTrack/types";
import React from "react";

export const MainLayout: React.FC<LayoutPropType> = ({ children }) => {
  return (
    <Flex w="100%" h="100%">
      <VStack w="50%" h="100%">
        <Box w="100%" h="20%" bg="bg1" mb="20px">
          gas prices
        </Box>
        <Box w="100%" h="80%" bg="bg1">
          est confirmation
        </Box>
      </VStack>
      <Box w="50%" h="100%" ml="20px" bg="bg1">
        network stats
      </Box>
    </Flex>
  );
};

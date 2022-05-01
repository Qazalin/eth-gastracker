import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext";
import { LayoutPropType } from "@etherTrack/types";
import React, { useEffect } from "react";

export const MainLayout: React.FC<LayoutPropType> = ({ children }) => {
  const isMobile = useAdaptivityContext();

  useEffect(() => console.log(isMobile), [isMobile]);

  if (isMobile)
    return (
      <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
        <Box borderRadius="inherit" w="100%" h="20%" bg="bg1">
          gas prices
        </Box>
        <Box borderRadius="inherit" w="100%" h="80%" bg="bg1">
          est confirmation
        </Box>
        <Box borderRadius="inherit" w="100%" h="100%" ml="20px" bg="bg1">
          network stats
        </Box>
      </VStack>
    );
  else
    return (
      <Flex w="100%" h="100%" borderRadius="10px">
        <VStack w="50%" h="100%" borderRadius="inherit">
          <Box borderRadius="inherit" w="100%" h="20%" bg="bg1" mb="20px">
            gas prices
          </Box>
          <Box borderRadius="inherit" w="100%" h="80%" bg="bg1">
            est confirmation
          </Box>
        </VStack>
        <Box borderRadius="inherit" w="50%" h="100%" ml="20px" bg="bg1">
          network stats
        </Box>
      </Flex>
    );
};

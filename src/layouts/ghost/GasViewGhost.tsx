import { Box, Skeleton, Center, Text } from "@chakra-ui/react";
import { GasViewPropType } from "@etherTrack/types";
import React from "react";

export const GasViewGhost = () => {
  return (
    <Box
      w="100%"
      h="100%"
      bgGradient="linear(#737DFE, #FFCAC9)"
      borderRadius="24px"
      p="2%"
    >
      <Center
        borderRadius="inherit"
        bg="bg1"
        w="100%"
        h="100%"
        pt="60px"
        flexDir="column"
      >
        <Skeleton borderRadius="5px" w="50%" height="2.4rem" mb="50px" />
        <Skeleton borderRadius="5px" w="50%" height="2.4rem" mb="20px" />
        <Skeleton borderRadius="5px" w="50%" height="2.4rem" mb="20px" />
      </Center>
    </Box>
  );
};

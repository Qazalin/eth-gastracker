import React from "react";
import { MainLayoutProps } from "@etherTrack/types";
import { useColorMode, VStack, Box } from "@chakra-ui/react";
import { getPrimaryGradient } from "@etherTrack/ui";

export const MobileLayout: React.FC<MainLayoutProps> = ({
  gasPriceLayout,
  barChartLayout,
  statsLayout,
}) => {
  const { colorMode } = useColorMode();
  const gradient = getPrimaryGradient(colorMode);

  return (
    <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
      <Box
        bgGradient={gradient}
        borderRadius="inherit"
        w="100%"
        h="100%"
        p="20px"
        pb="35px"
      >
        {gasPriceLayout}
      </Box>
      <Box bgGradient={gradient} borderRadius="inherit" w="100%" h="100%">
        {barChartLayout}
      </Box>
      <Box
        bgGradient={gradient}
        borderRadius="inherit"
        w="100%"
        h="100%"
        ml="20px"
      >
        {statsLayout}
      </Box>
    </VStack>
  );
};

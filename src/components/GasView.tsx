import { Box, Center, Text } from "@chakra-ui/react";
import { GasViewPropType } from "@etherTrack/types";
import React from "react";

export const GasView: React.FC<GasViewPropType> = ({
  title,
  gasPrice,
  estimatedTime,
}) => {
  let color: string;
  switch (title) {
    case "Low":
      color = "green1";
    case "Average":
      color = "yellow1";
    case "High":
      color = "red1";
  }
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
        flexDir="column"
      >
        <Text fontSize="2.4rem" color={color} mb="50px" variant="h1">
          {title}
        </Text>
        <Text fontSize="1.7rem" variant="h2">
          {gasPrice} gwei
        </Text>
        <Text variant="h3" color="text2">
          ~ {estimatedTime}
        </Text>
      </Center>
    </Box>
  );
};

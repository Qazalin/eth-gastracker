import { Box, Center, Text } from "@chakra-ui/react";
import { GasViewPropType } from "@etherTrack/types";
import React from "react";
import { secondsToMins } from "@etherTrack/lib";

export const GasView: React.FC<GasViewPropType> = ({
  title,
  gasPrice,
  estimatedTime,
}) => {
  const colors: Record<"Low" | "Average" | "High", string> = {
    Low: "green1",
    Average: "yellow1",
    High: "red1",
  };

  const color = colors[title];

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
        <Text fontSize="1.7rem">{gasPrice} gwei</Text>
        <Text variant="h3" color="text2">
          ~
          {parseInt(estimatedTime) >= 60
            ? secondsToMins(parseInt(estimatedTime)) + " mins"
            : estimatedTime + "s"}
        </Text>
      </Center>
    </Box>
  );
};

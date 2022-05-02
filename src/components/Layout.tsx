import { Flex, Box, Text } from "@chakra-ui/react";
import { LayoutPropType } from "@etherTrack/types";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Countdown } from "@etherTrack/components";

export const Layout: React.FC<LayoutPropType> = ({ children }) => {
  const d = new Date();
  const lastUpdated = d.toISOString();
  const dateSplits = lastUpdated.split("T");
  const cleanDate = dateSplits[0] + " " + dateSplits[1].slice(0, 8); // format: yy-mm-dd hh-mm-ss
  return (
    <Box w="100vw" h="100vh" p="40px">
      <Box w="100%" h="100px">
        <Text textTransform="capitalize" variant="h1" mt="10px">
          Ethereum gas tracker
        </Text>
        <DarkModeSwitch />
      </Box>
      <Flex
        justifyContent="space-between"
        fontSize="1.2rem"
        mx="20px"
        mb="20px"
      >
        <Text>last updated: {cleanDate}</Text>
        <Countdown time={5} />
      </Flex>
      <Box mt="10px" w="100%" h="85%">
        {children}
      </Box>
    </Box>
  );
};

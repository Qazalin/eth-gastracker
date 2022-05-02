import { Flex, Box, Text } from "@chakra-ui/react";
import { LayoutPropType } from "@etherTrack/types";
import React from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Countdown } from "@etherTrack/components";

/**
 * The primary layout used in the _app.tsx page
 */
export const Layout: React.FC<LayoutPropType> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh" p="40px">
      <Box w="100%" h="100px">
        <Text textTransform="capitalize" variant="h1" mt="10px">
          Ethereum gas tracker
        </Text>
        <DarkModeSwitch />
      </Box>
      <Box mt="10px" w="100%" h="85%">
        {children}
      </Box>
    </Box>
  );
};

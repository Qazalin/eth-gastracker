import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
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
      <Center w="100%" h="100px" justifyContent="flex-start">
        <Image
          src="https://ethereum.org/static/4f10d2777b2d14759feb01c65b2765f7/b7d3e/eth-glyph-colored.png"
          alt="eth"
          h="100%"
          maxH="50px"
          objectFit="contain"
          mr="15px"
        />
        <Text textTransform="capitalize" variant="h1" mt="10px">
          Ethereum gas tracker
        </Text>
        <DarkModeSwitch />
      </Center>
      <Box mt="10px" w="100%" h="85%">
        {children}
      </Box>
    </Box>
  );
};

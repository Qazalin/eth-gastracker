import { Box, Text } from "@chakra-ui/react";
import { LayoutPropType } from "@etherTrack/types";
import React from "react";

export const Layout: React.FC<LayoutPropType> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      {children}
    </Box>
  );
};

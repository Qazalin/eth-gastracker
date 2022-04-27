import { Box, Text } from "@chakra-ui/react";

export const GasView = ({ gasprice }) => {
  return (
    <Box>
      <Text>The current Gas price is: {gasprice}</Text>
    </Box>
  );
};

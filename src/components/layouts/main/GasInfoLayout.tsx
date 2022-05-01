import { Box, HStack, CircularProgress } from "@chakra-ui/react";
export const GasInfoLayout = () => {
  return (
    <HStack w="100%" h="100%">
      <CircularProgress
        color="#FC759F"
        size="100%"
        w="40%"
        h="100%"
        thickness="8px"
        trackColor="#494F56"
        value={90}
      />
      <CircularProgress
        color="#9DABF2"
        size="100%"
        w="40%"
        h="100%"
        thickness="8px"
        value={90}
        trackColor="#494F56"
      />
      <CircularProgress
        color="#A17AC9"
        size="100%"
        w="40%"
        h="100%"
        thickness="8px"
        value={90}
        trackColor="#494F56"
      />
    </HStack>
  );
};

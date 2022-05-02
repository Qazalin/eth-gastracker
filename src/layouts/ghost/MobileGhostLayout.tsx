import { VStack, Box, Skeleton } from "@chakra-ui/react";

export const MobileGhostLayout = () => {
  return (
    <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
      <Box borderRadius="inherit" w="100%" h="100%" bg="bg1" p="20px">
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box borderRadius="inherit" w="100%" h="100%" bg="bg1" p="20px">
        <Skeleton w="100%" h="10%" />
        <Skeleton w="100%" h="80%" mt="30px" />
      </Box>
      <Box borderRadius="inherit" w="100%" h="100%" ml="20px" bg="bg1" p="20px">
        <Skeleton w="100%" h="40%" />
        <Skeleton mt="30px" w="100%" h="40%" />
      </Box>
    </VStack>
  );
};

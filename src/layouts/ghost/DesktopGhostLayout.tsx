import { Box, Skeleton, Flex, VStack, useColorMode } from "@chakra-ui/react";
import { getPrimaryGradient } from "@etherTrack/ui";

export const DesktopGhostLayout = () => {
  const { colorMode } = useColorMode();
  const gradient = getPrimaryGradient(colorMode);
  return (
    <Flex w="100%" h="100%" borderRadius="10px">
      <VStack w="100%" h="100%" borderRadius="inherit">
        <Box
          borderRadius="inherit"
          w="100%"
          h="20%"
          bgGradient={gradient}
          mb="20px"
          p="20px"
        >
          <Skeleton w="100%" h="100%" />
        </Box>
        <Box
          bgGradient={gradient}
          borderRadius="inherit"
          w="100%"
          h="80%"
          p="20px"
        >
          <Skeleton w="100%" h="10%" />
          <Skeleton w="100%" h="80%" mt="30px" />
        </Box>
      </VStack>
      <Box
        bgGradient={gradient}
        borderRadius="inherit"
        w="50%"
        h="100%"
        ml="20px"
        p="20px"
      >
        <Skeleton w="100%" h="40%" />
        <Skeleton mt="30px" w="100%" h="40%" />
      </Box>
    </Flex>
  );
};

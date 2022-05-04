import { useColorMode, VStack, Box, Skeleton } from "@chakra-ui/react";
import { getPrimaryGradient } from "@etherTrack/ui";

export const MobileGhostLayout = () => {
  const { colorMode } = useColorMode();
  const gradient = getPrimaryGradient(colorMode);
  return (
    <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
      <Box
        borderRadius="inherit"
        w="100%"
        h="100%"
        bgGradient={gradient}
        p="20px"
      >
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box
        bgGradient={gradient}
        borderRadius="inherit"
        w="100%"
        h="100%"
        p="20px"
      >
        <Skeleton w="100%" h="10%" />
        <Skeleton w="100%" h="80%" mt="30px" />
      </Box>
      <Box
        bgGradient={gradient}
        borderRadius="inherit"
        w="100%"
        h="100%"
        ml="20px"
        p="20px"
      >
        <Skeleton w="100%" h="40%" />
        <Skeleton mt="30px" w="100%" h="40%" />
      </Box>
    </VStack>
  );
};

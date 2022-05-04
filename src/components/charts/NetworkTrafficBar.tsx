import { Box, keyframes } from "@chakra-ui/react";

/** Illustrates the network traffic as an intuitive progress dial
 * @param average network traffic (a number between zero and 1)
 */
export const NetworkTrafficBar = ({ avgTraffic }) => {
  const percentage = avgTraffic * 100;
  const fill = keyframes`
  from {width: 100%;}
  to {width: ${100 - percentage}%}
`;
  const fillAnimation = `${fill} 2s linear`;
  return (
    <Box w="100%" h="100%" pos="relative" borderRadius="35px" overflow="hidden">
      <Box
        w="100%"
        h="100%"
        bgGradient="linear(to-r, #3fffa2 0%, #ffdb3a 70%, #e5405e 100%)"
      />
      <Box
        w={`${100 - percentage}%`}
        h="100%"
        bg="black"
        pos="absolute"
        top={0}
        right={0}
        animation={fillAnimation}
      />
    </Box>
  );
};

import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { theme } from "@etherTrack/ui";

const Custom404 = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100vw"
        h="100vh"
        pt="10%"
        alignItems="center"
        justifyItems="center"
      >
        <Center>
          <Image src="robot.png" w="50%" h="50%" alt="robot" maxW="500px" />
          <Box textAlign="center" fontSize="2rem">
            <Text>Sorry, you've reached for something that doesn't exist</Text>
            <Link color="blue1" href="/">
              Back to home
            </Link>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};
export default Custom404;

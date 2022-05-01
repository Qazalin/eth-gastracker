import { Box, Image, Center, Text, Button } from "@chakra-ui/react";
import * as Sentry from "@sentry/nextjs";
import React from "react";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  Sentry.captureException(error);
  return (
    <Center flexDir="column">
      <Image src="robot.png" w="50%" h="50%" alt="robot" maxW="500px" />
      <Text variant="h1" color="red1">
        Sorry, there was a problem on our side
      </Text>
      <Button mt="20px" variant="primary">
        Refresh the page
      </Button>
    </Center>
  );
};

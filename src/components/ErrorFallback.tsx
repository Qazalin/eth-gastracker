import { Image, Center, Text, Button } from "@chakra-ui/react"
import * as Sentry from "@sentry/nextjs"
import Link from "next/link"
import React from "react"
import { FallbackProps } from "react-error-boundary"

/**
 * Fallback componenet used by the React ErrorBoundary component
 */
export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  Sentry.captureException(error) // log error to Sentry
  return (
    <Center flexDir="column">
      <Image src="robot.png" w="50%" h="50%" alt="robot" maxW="500px" />
      <Text variant="h1" color="red1">
        Sorry, there was a problem on our side
      </Text>
      <Button mt="20px" variant="primary">
        <Link href="/">
          Back to home
        </Link>
      </Button>
    </Center>
  )
}

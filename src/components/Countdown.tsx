import React from "react";
import { Box, Text, TextProps } from "@chakra-ui/react";

export const Countdown: React.FC<{ time: number; props?: TextProps }> = ({
  time,
  props,
}) => {
  const [counter, setCounter] = React.useState(time);

  // Second Attempts
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    } else if (counter == 0) {
      setCounter(time);
    }
    return () => clearInterval(timer);
  }, [counter, time]);

  return (
    <Box>
      <Text {...props}>Next update in {counter}s</Text>
    </Box>
  );
};

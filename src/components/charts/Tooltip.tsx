import { Box, Text } from "@chakra-ui/react";
import { TooltipProps } from "recharts";

export const Tooltip: React.FC<TooltipProps<string, string>> = ({
  payload,
  active,
}) => {
  if (active) {
    console.log(payload[0]);
    return (
      <Box bg="gray.900" p="2px" borderRadius={"md"}>
        <Text variant="subtitle">{`${payload[0].name} : ${payload[0].value}`}</Text>
      </Box>
    );
  }

  return null;
};

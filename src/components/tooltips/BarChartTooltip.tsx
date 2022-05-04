import { Box, Text } from "@chakra-ui/react"
import { TooltipProps } from "recharts"

export const BarChartTooltip: React.FC<TooltipProps<number, string>> = ({
  payload,
  active,
}) => {
  if (active) {
    return (
      <Box bg="bg2" color="text2" p="12px" borderRadius={"md"} maxW="170px">
        <Text
          textTransform="capitalize"
          variant="h3"
        >{`${payload[0].payload.name} gas price : ${payload[0].value} seconds confirmation time`}</Text>
      </Box>
    )
  }
  return null
}

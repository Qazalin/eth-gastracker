import React from "react"
import { MainLayoutProps } from "@etherTrack/types"
import { VStack, Box } from "@chakra-ui/react"

export const MobileLayout: React.FC<MainLayoutProps> = ({
  gasPriceLayout,
  barChartLayout,
  statsLayout,
}) => {
  return (
    <VStack spacing={5} w="100%" h="100%" borderRadius="10px">
      <Box borderRadius="inherit" w="100%" h="100%" bg="bg1" p="20px">
        {gasPriceLayout}
      </Box>
      <Box borderRadius="inherit" w="100%" h="100%" bg="bg1">
        {barChartLayout}
      </Box>
      <Box borderRadius="inherit" w="100%" h="100%" ml="20px" bg="bg1">
        {statsLayout}
      </Box>
    </VStack>
  )
}

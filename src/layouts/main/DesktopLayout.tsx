import { Flex, VStack, Box, Center, useColorMode } from "@chakra-ui/react"
import { MainLayoutProps } from "@etherTrack/types"
import { getPrimaryGradient } from "@etherTrack/ui"

export const DesktopLayout: React.FC<MainLayoutProps> = ({
    gasPriceLayout,
    barChartLayout,
    statsLayout,
}) => {
    const { colorMode } = useColorMode()
    const gradient = getPrimaryGradient(colorMode)
    return (
        <Flex w="100%" h="100%" borderRadius="10px">
            <VStack w="100%" h="100%" borderRadius="inherit">
                <Box
                    borderRadius="inherit"
                    w="100%"
                    h="200px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgGradient={gradient}
                    mb="20px"
                    p="20px"
                >
                    {gasPriceLayout}
                </Box>
                <Box
                    bgGradient={gradient}
                    borderRadius="inherit"
                    w="100%"
                    h="80%"
                >
                    {barChartLayout}
                </Box>
            </VStack>
            <Box
                bgGradient={gradient}
                borderRadius="inherit"
                w="50%"
                h="100%"
                ml="20px"
            >
                {statsLayout}
            </Box>
        </Flex>
    )
}

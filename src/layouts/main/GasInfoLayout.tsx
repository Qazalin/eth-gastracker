import { HStack } from "@chakra-ui/react"
import { GasView } from "@etherTrack/components"
import { IsolatedLayoutProps } from "@etherTrack/types"
import { getPercentageDiff } from "@etherTrack/utils"

/**
 * Layout for gas information: price, estimated confirmation time
 * @param data The data from Etherscan's API
 */
export const GasInfoLayout: React.FC<{
    data: IsolatedLayoutProps
}> = ({ data }) => {
    const gasPrices = [
        data.SafeGasPrice,
        data.ProposeGasPrice,
        data.FastGasPrice,
    ]
    return (
        <HStack w="100%" h="100%">
            <GasView
                title="Low"
                gasPrice={data.SafeGasPrice}
                estimatedTime={data.SafeGasEstimate}
                percentageDiff={getPercentageDiff(gasPrices, gasPrices[0])}
            />
            <GasView
                title="Average"
                gasPrice={data.ProposeGasPrice}
                estimatedTime={data.ProposeGasEstimate}
                percentageDiff={getPercentageDiff(gasPrices, gasPrices[1])}
            />
            <GasView
                title="High"
                gasPrice={data.FastGasPrice}
                estimatedTime={data.FastGasEstimate}
                percentageDiff={getPercentageDiff(gasPrices, gasPrices[2])}
            />
        </HStack>
    )
}

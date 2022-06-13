// Modules //
import { SWRConfig } from "swr"
import { Flex, Text } from "@chakra-ui/react"

// API Fetching related //
import {
    ETHERSCAN_APIENDPOINT,
    GASPRICE_PARAMS,
    useApi,
    useGasEtimator,
    etherscanFetcher,
} from "@etherTrack/lib"

// Types //
import { IsolatedLayoutProps } from "@etherTrack/types"
import {
    EtherscanGasParams,
    EtherscanGasPriceRes,
    EtherscanGasResultType,
} from "@etherTrack/types/ApiTypes"

// Components //
import {
    LayoutManager,
    GasInfoLayout,
    ConfirmationChartLayout,
    NetworkStatsLayout,
} from "@etherTrack/layouts"
import { Countdown } from "@etherTrack/components"
import { GetServerSideProps } from "next"
import { basicFetcher } from "@etherTrack/lib/basicFetcher"

const Index = ({ fallback, exchange }) => {
    const EtherscanRes = {
        SafeGasPrice: 72,
        SafeGasEstimate: null,
        ProposeGasPrice: 73,
        ProposeGasEstimate: null,
        FastGasPrice: 73,
        FastGasEstimate: null,
        suggestBaseFee: 71,
        gasUsedRatio: [
            0.2775205, 0.542596221456415, 0.433101534039205, 0.506558135653399,
            0.302100084060163,
        ],
    }
    /* last updated date and time */
    const d = new Date()
    const lastUpdated = d.toISOString()
    const dateSplits = lastUpdated.split("T")
    const cleanDate = dateSplits[0] + " " + dateSplits[1].slice(0, 8) // format: yy-mm-dd hh-mm-ss
    return (
        // use the ssr fetched data as fallback
        // data should update every 5 seconds
        <SWRConfig
            value={{
                fallback,
                refreshInterval: 5000,
                dedupingInterval: 1000,
                fetcher: basicFetcher,
            }}
        >
            <Flex justifyContent="space-between" mx="20px" mb="20px">
                <Text variant="h3">last updated: {cleanDate} UTC</Text>
                <Countdown sx={{ variant: "h3" }} time={5} />
            </Flex>
            <LayoutManager
                gasPriceLayout={<GasInfoLayout data={EtherscanRes} />}
                barChartLayout={<ConfirmationChartLayout data={EtherscanRes} />}
                statsLayout={<NetworkStatsLayout data={EtherscanRes} />}
                isLoading={EtherscanRes === null}
            />
        </SWRConfig>
    )
}

export default Index

/* Data pre-fetching using SSR */
export const getServerSideProps: GetServerSideProps = async () => {
    const gasApiEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.EHERSCAN_API_KEY}`
    const res = await fetch(gasApiEndpoint)
    const exe = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR"
    )
    const data: EtherscanGasResultType = await res.json()
    const ex = await exe.json()
    return {
        props: {
            fallback: {
                "https://api.etherscan.io/api": data,
            },
            exchange: ex,
        },
    }
}

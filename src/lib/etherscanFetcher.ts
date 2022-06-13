import { EtherscanGeneralRes } from "@etherTrack/types"

/**
 * utility function designed to handle etherscan-specific messages in the result object that are error-like but aren't thrown by their API
 * @param args The arguments passed by the useSWR hook
 */
export const etherscanFetcher = async (args: any) => {
    const res = await fetch(args)
    const data: EtherscanGeneralRes = await res.json()
    /* handle max rate limit of etherscan */
    if (data?.result === "Max rate limit reached") {
        throw new Error("Max rate limit reached")
    }
    return data
}

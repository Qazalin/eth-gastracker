import { basicFetcher } from "../basicFetcher";
import useSWR, { SWRConfiguration } from "swr";
import { apiParamEndpoint } from "@etherTrack/utils";

/**
 * Re-usable SWR api implementation.
 *
 * @param The URL of API endpoint
 * @param Query params
 * @param fetcher OPTIONAL custom fetcher
 * @param config OPTIONAL configuration
 * @returns ResponseType
 */
export function useApi<ParamsType extends Record<string, string>, ResponseType>(
  url: string,
  params: ParamsType,
  fetcher?: (args: any) => any,
  config?: SWRConfiguration
): { loading: boolean; error: unknown; data: ResponseType } {
  let endpoint: string;
  if (url) endpoint = apiParamEndpoint(url, params);
  const { data, error } = useSWR<ResponseType, unknown>(
    () => endpoint,
    fetcher ? fetcher : basicFetcher,
    config ? config : null
  );

  return {
    loading: !error && !data,
    error,
    data,
  };
}

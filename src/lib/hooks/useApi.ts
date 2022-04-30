import { basicFetcher } from "../basicFetcher";
import useSWR, { SWRConfiguration } from "swr";

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
  const usp = new URLSearchParams(params);

  // Create a stable key for SWR
  usp.sort();
  const qs = usp.toString();

  const endpoint = `${url}?${qs}`;
  const { data, error } = useSWR<ResponseType, unknown>(
    () => endpoint,
    fetcher ? fetcher : basicFetcher,
    config
  );

  return {
    loading: !error && !data,
    error,
    data,
  };
}

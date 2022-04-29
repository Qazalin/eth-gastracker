import { generalFetcher } from "../generalFetcher";
import useSWR, { SWRConfiguration } from "swr";

/*
 * Re-usable SWR api implementation.
 *
 * @param The URL of API endpoint
 * @param Query params
 * @returns ResponseType
 */
export function useApi<ParamsType extends Record<string, string>, ResponseType>(
  url: string,
  params: ParamsType,
  config?: SWRConfiguration
): { loading: boolean; error: unknown; data: ResponseType } {
  const usp = new URLSearchParams(params);

  // Create a stable key for SWR
  usp.sort();
  const qs = usp.toString();

  const endpoint = `${url}?${qs}`;
  const { data, error } = useSWR<ResponseType, unknown>(
    () => endpoint,
    generalFetcher,
    config
  );

  return {
    loading: !error && !data,
    error,
    data,
  };
}

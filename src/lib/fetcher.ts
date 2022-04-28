import useSWR from "swr";

/**
 * Re-usable SWR api implementation.
 *
 * @param The URL of API endpoint
 * @param Query params
 * @returns ResponseType
 */
function useApi<ParamsType extends Record<string, string>, ResponseType>(
  url: string,
  params: ParamsType
): { loading: boolean; error: unknown; data: ResponseType } {
  const usp = new URLSearchParams(params);

  // Create a stable key for SWR
  usp.sort();
  const qs = usp.toString();

  const { data, error } = useSWR<ResponseType, unknown>(`${url}?${qs}`);

  return {
    loading: !error && !data,
    data,
    error,
  };
}

export default useApi;

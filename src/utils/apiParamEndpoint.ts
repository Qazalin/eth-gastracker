/**
 * A function for uniting the API url and its params to a single string for GET requests
 * @param url The base url
 * @param params The params for the GET request */
export function apiParamEndpoint(
  url: string,
  params: Record<string, string> | string
): string {
  const usp = new URLSearchParams(params);

  // Create a stable key for SWR
  usp.sort();
  const qs = usp.toString();

  const endpoint = `${url}?${qs}`;
  return endpoint;
}

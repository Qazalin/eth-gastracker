export async function basicFetcher(url: string) {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const json = (await res.json()) as { message: string };
    throw new Error(json.message);
  }

  return res.json();
}

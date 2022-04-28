export const generalFetcher = (args: any) =>
  fetch(args).then((res) => res.json());

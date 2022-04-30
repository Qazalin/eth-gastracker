export const basicFetcher = (args: any) =>
  fetch(args).then((res) => res.json());

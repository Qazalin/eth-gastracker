export async function gasFetcher() {
  fetch(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
}

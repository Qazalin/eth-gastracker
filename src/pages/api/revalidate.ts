import { NextApiRequest, NextApiResponse } from "next";

async function handler(_req: NextApiRequest, res: NextApiResponse) {
  console.log("revalidating...");
  let revalidated = false;
  try {
    await res.unstable_revalidate("/");
    revalidated = true;
  } catch (err) {
    console.log(err);
  }

  res.json({ revalidated });
}

export default handler;

import { NextApiRequest, NextApiResponse } from "next";
import { getOfertsEM } from "../../../lib/config/manantial";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const data = await getOfertsEM();
      res.status(200).json({ data });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

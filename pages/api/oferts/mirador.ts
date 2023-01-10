import { NextApiRequest, NextApiResponse } from "next";
import { getOfertsML } from "../../../lib/config/mirador";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const data = await getOfertsML();
      res.status(200).json({ data });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

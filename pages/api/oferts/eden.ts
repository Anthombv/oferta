import { NextApiRequest, NextApiResponse } from "next";
import { getOfertsED } from "../../../lib/config/eden";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const data = await getOfertsED();
      res.status(200).json({ data });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

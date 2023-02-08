import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "PUT":
        return await updateTotalOfert(req, res);
      default:
        break;
    }
  } catch (error) {
    error;
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

const updateTotalOfert = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { cli_totalOferta } = req.body;
  dataBase.query("UPDATE oferta SET cli_totalOferta = ?  WHERE id = ?", [
    cli_totalOferta,
    id,
  ]);
  return res.status(200).json({
    cli_totalOferta,
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};

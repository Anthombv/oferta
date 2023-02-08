import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "PUT":
        return await EditOfert(req, res);
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

const EditOfert = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { cli_name } = req.body;
  dataBase.query("UPDATE oferta SET cli_name = ? WHERE id = ?", [cli_name, id]);
  return res.status(200).json({
    cli_name,
    id,
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getLotesEMOn(req, res);
      default:
        break;
    }
  } catch (error) {
    error;
    return res.status(500).json({
      messege: new Error(error).message,
      success: false,
    });
  }
}

const getLotesEMOn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await dataBase.query(
    "SELECT * FROM invmae WHERE invmae.mae_regsan = '39' && invmae.mae_codmar = '3.- LIBRE' && mae_codinv = ?",
    [id],
    function (error, rows, fields) {
      return res.status(200).json({
        message: "Lote numero " + id,
        data: rows[0],
        success: true,
      });
    }
  );
};

export const config = {
  api: {
    externalResolver: true,
  },
};

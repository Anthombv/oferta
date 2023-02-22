import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getLotesML(req, res);
      default:
        throw new Error("Metodo invalido");
    }
  } catch (error) {
    error;
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

const getLotesML = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  dataBase.query(
    "SELECT * FROM invmae WHERE invmae.mae_codinv = ?",
    [id],
    function (err, rows, fields) {
      return res.status(200).json({
        message: "Lote " + id,
        data: rows,
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

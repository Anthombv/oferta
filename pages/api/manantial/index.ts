import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getLotesEM(req, res);
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

const getLotesEM = async (req: NextApiRequest, res: NextApiResponse) => {
  dataBase.query(
    "SELECT * FROM invmae WHERE invmae.mae_regsan = '39' && invmae.mae_codmar = '3.- LIBRE' ",
    function (err, rows, fields) {
      return res.status(200).json({
        message: "Lotes disponibles EL MANANTIAL",
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

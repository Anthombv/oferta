import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getOfertEDOn(req, res);
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

const getOfertEDOn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  dataBase.query(
    "SELECT * FROM oferta, invmae WHERE oferta.id = ? && invmae.mae_codinv = oferta.mae_codinv",
    [id],
    function (error, rows, fields) {
      return res.status(200).json({
        message: "Oferta con id " + id,
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

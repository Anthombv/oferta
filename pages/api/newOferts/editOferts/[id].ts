import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getEditOfertEDOn(req, res);
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

const getEditOfertEDOn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  dataBase.query(
    "SELECT * FROM oferta, invmae WHERE oferta.id = ? && invmae.mae_codinv = oferta.mae_codinv",
    [id],
    function (error, rows, fields) {
      return res.status(200).json({
        message: "Oferta con id " + id,
        data: rows[0],
        success: true,
      });
    }
  );
};

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

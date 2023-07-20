import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getOfertML(req, res);
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

const getOfertML = async (req: NextApiRequest, res: NextApiResponse) => {
  dataBase.query(
    "SELECT * FROM ofertas WHERE mae_codinv BETWEEN 'ML-000' AND 'ML-999' && cli_state = 'Vendido' ",
    function (err, rows, fields) {
      return res.status(200).json({
        message: "Ofertas vendidas",
        data: rows,
        success: true,
      });
    }
  );
};

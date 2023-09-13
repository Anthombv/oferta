import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      switch (req.method) {
        case "GET":
          return await getOfertEM(req, res);
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
  
  const getOfertEM = async (req: NextApiRequest, res: NextApiResponse) => {
    dataBase.query(
      "SELECT * FROM ofertas WHERE mae_codinv BETWEEN 'EM-000' AND 'EM-999' && cli_state = 'Vendido' ORDER BY id DESC",
      function (err, rows, fields) {
        return res.status(200).json({
          message: "Ofertas vendidas",
          data: rows,
          success: true,
        });
      }
    );
  };
  
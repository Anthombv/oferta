import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      switch (req.method) {
        case "GET":
          return await getOfertEJ(req, res);
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
  
  const getOfertEJ = async (req: NextApiRequest, res: NextApiResponse) => {
    dataBase.query(
      "SELECT * FROM oferta WHERE mae_codinv BETWEEN 'EJ-M1-000' AND 'EJ-M3-999' && cli_state = 'Vendido' ",
      function (err, rows, fields) {
        return res.status(200).json({
          message: "Ofertas vendidas",
          data: rows,
          success: true,
        });
      }
    );
  };
  
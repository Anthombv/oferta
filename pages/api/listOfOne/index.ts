import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await listOfOne(req, res);
      default:
        break;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({
      message: "Error fetching offers",
      error: error.message,
      success: false,
    });
  }
}

const listOfOne = async (req: NextApiRequest, res: NextApiResponse) => {
  dataBase.query("SELECT * FROM ofertas", function (err, rows, fields) {
    return res.status(200).json({
      message: "Lotes Vendidos",
      data: rows,
      success: true,
    });
  });
};

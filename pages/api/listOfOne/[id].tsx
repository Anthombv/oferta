import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";
import { UserModel } from "../../../lib/mongo/schemas";

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
  const userName = req.query.id;

  try {
    // @ts-ignore
    const user = await UserModel.findOne({ userName });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    const soliciter = user.userName;

    dataBase.query(
      "SELECT * FROM ofertas WHERE soliciter = ?",
      [soliciter],
      function (error, rows, fields) {
        return res.status(200).json({
          message: "Todas las ventas de: " + soliciter,
          data: rows,
          success: true,
        });
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return res
      .status(500)
      .json({ message: "Error fetching offers", success: false });
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};

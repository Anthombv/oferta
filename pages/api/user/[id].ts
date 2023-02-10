import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/middlewares/mongo";
import read from "../../../lib/mongo/user/read";
import remove from "../../../lib/mongo/user/delete"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // connect to the database
    await dbConnect();

    switch (req.method) {
      case 'GET':
        return await read(req, res)
      case 'DELETE':
        return await remove(req, res)
      default:
        throw new Error('Invalid method')
    }
  } catch (error) {
    console.error(error);
    // return the error
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

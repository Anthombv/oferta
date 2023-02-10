import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";
import { UserModel } from "../schemas";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  const userName = req.headers.username as string;
  const resp = await UserModel.findByIdAndRemove(id);
  //{ acknowledged: true, deletedCount: 1 }

  //@ts-ignore
  if (resp.deletedCount === 1)
    return res.status(200).json({
      message: "Eliminado!",
      success: true,
    });

  return res.status(500).json({
    message: "Error inesperado",
    success: false,
  });
}

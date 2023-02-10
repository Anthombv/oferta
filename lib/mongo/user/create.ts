import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";
import { UserModel } from "../schemas";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.body as User;
  // fetch the posts
  const soli = new UserModel(user)

  await soli.save()

  return res.status(200).json({
    message: "Usuario Creado",
    success: true,
  });
}
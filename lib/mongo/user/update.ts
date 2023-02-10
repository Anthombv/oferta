import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.body as User;
  //@ts-ignore
  const resp = await UserModel.findOneAndUpdate(
    {
      _id: user.id,
    },
    user.password !== ""
      ? user
      : {
          userName: user.userName,
          email: user.email,
          role: user.role,
        }
  );


  if (resp === null)
    return res.status(500).json({
      message: "Usuario no encontrado",
      success: false,
    });

  return res.status(200).json({
    message: "Usuario editado",
    success: true,
  });
}

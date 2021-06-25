import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type Data = {
  message?: string;
  token?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      username !== process.env.admin_user ||
      password !== process.env.admin_password
    )
      return res.status(401).json({
        message: "Invalid Credentials",
      });

    let token = jwt.sign(
      {
        username,
      },
      process.env.SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      token,
    });
  }
}

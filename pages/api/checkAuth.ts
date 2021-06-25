import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type Data = {
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token } = req.body;

  if (!token)
    return res.status(401).json({
      message: "Token doesn't exist please login again",
    });

  if (!jwt.verify(token, process.env.SECRET as string)) {
    return res.status(403).json({
      message: "Invalid token, please login again",
    });
  }

  return res.status(200);
}

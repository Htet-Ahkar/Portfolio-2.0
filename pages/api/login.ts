import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = process.env.NEXT_PUBLIC_JWT_KEY;

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin:
          username === process.env.NEXT_PUBLIC_USERNAME &&
          password === process.env.NEXT_PUBLIC_PASSWORD,
      },
      KEY
    ),
  });
};

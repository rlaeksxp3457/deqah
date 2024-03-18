import jwt from 'jsonwebtoken';

export const authenticateToken = (req: any, res: any, next: any) => {
  // @ts-ignore
  const { JWT_SECRET }: string = process.env;
  // JWT 검증 미들웨어
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer asdasdasd./asdasd/asdasdasd/asd123asd/asd.asdasdasd[1]
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    req.user = user;
    next();
  });
};

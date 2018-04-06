import { Response, Request } from 'express';

import { findTheHeaviestBall } from '../domain/balls';

export const index = (req: Request, res: Response) => {
  const balls: number[] = req.body.balls;
  const result = findTheHeaviestBall(balls);

  res.json(result);
};

export interface IHeaviestBall {
  iterations: number;
  result: number | null;
}

export const findTheHeaviestBall = (balls: number[]): IHeaviestBall => {
  let i = 0;
  let j;
  let result = null;
  while (i < balls.length) {
    j = i;
    i += 1;
    
    if (balls[j] > 0) {
      result = j;
      break;
    }
  }

  return {
    result,
    iterations: i,
  };
};

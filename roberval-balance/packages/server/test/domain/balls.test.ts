import { expect } from 'chai';

import { IHeaviestBall, findTheHeaviestBall } from '../../src/domain/balls';

describe('findTheHeaviestBall', () => {
  it('should return a default object when no ball exists', () => {
    const balls: number[] = [];
    const expected: IHeaviestBall = { iterations: 0, result: null };

    expect(findTheHeaviestBall(balls)).to.deep.equal(expected);
  });

  it('should return the first item with the value higher than 0 in the balls array', () => {
    const balls: number[] = [0, 0, 0, 1];
    const expected: IHeaviestBall = { iterations: 4, result: 3 };

    expect(findTheHeaviestBall(balls)).to.deep.equal(expected);
  });

  it('should return the right iterations number', () => {
    const balls: number[] = [0, 0, 1, 0];
    const expected: IHeaviestBall = { iterations: 3, result: 2 };

    expect(findTheHeaviestBall(balls)).to.deep.equal(expected);
  });

  it('should return the right iterations number when no heaviest ball found', () => {
    const balls: number[] = [0, 0, 0, 0];
    const expected: IHeaviestBall = { iterations: 4, result: null };

    expect(findTheHeaviestBall(balls)).to.deep.equal(expected);
  });
});

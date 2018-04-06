import request from 'supertest';
import app from '../../src/app';

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .post('/')
      .send({
        balls: [0, 0, 1],
      })
      .expect(200, done);
  });
});

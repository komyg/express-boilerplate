import { request } from '../../../../setup-e2e-tests';

describe('Health Check Controller', () => {
  it('should execute the health check', async () => {
    const result = await request.get('/healthcheck');
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({ status: 'OK' });
  });
});

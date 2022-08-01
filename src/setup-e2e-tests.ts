import 'dotenv/config';
import supertest from 'supertest';
import { buildApplication } from './application';

let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  const app = await buildApplication();
  request = supertest(app);
});

export { request };

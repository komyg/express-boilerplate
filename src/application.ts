import express from 'express';
import { createHealthCheckModule } from './health-check/healthcheck.module';

export async function buildApplication() {
  const application = express();

  application.use(express.json());
  application.use(express.urlencoded({ extended: false }));

  const healthCheckModule = createHealthCheckModule();
  application.use('/', healthCheckModule.getHealthCheckRouter());
  application.use('/', (_req, res) => res.send('Hello World!'));

  return application;
}

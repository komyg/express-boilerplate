import express, { Router } from 'express';
import { bootstrapCompanyModule } from './company/company.module';
import { createHealthCheckModule } from './health-check/healthcheck.module';

export async function buildApplication() {
  const application = express();

  application.use(express.json());
  application.use(express.urlencoded({ extended: false }));

  const router = Router();

  const company = bootstrapCompanyModule(router);
  application.use('/api', company);

  const healthCheckModule = createHealthCheckModule();
  application.use('/', healthCheckModule.getHealthCheckRouter());

  return application;
}

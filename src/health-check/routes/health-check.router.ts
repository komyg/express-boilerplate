import { Router } from 'express';
import { HealthCheckController } from '../presentation/controllers/health-check.controller';

const BASE_ROUTE = '/healthcheck';

export function buildHealthCheckRouter(
  healthCheckController: HealthCheckController
) {
  const router = Router();

  router.get(BASE_ROUTE, healthCheckController.healthCheck);

  return router;
}

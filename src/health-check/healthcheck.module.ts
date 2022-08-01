import { once } from '../common/fp/once/once';
import { createHealthCheckController } from './presentation/controllers/health-check.controller';
import { buildHealthCheckRouter } from './routes/health-check.router';

export function createHealthCheckModule() {
  const getHealthCheckController = once(() => createHealthCheckController());

  const getHealthCheckRouter = once(() =>
    buildHealthCheckRouter(getHealthCheckController())
  );

  return { getHealthCheckRouter };
}

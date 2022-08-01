import { Request, Response } from 'express';

export type HealthCheckController = ReturnType<
  typeof createHealthCheckController
>;
export function createHealthCheckController() {
  return { healthCheck };
}

function healthCheck(_req: Request, res: Response) {
  res.json({ status: 'OK' });
}

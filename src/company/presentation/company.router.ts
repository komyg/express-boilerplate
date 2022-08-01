import { IRouter } from 'express';
import { CompanyController } from './company.controller.bootstrap';

const BASE_ROUTE = '/company';

export function bootstrapCompanyRouter(
  controller: CompanyController,
  router: IRouter
) {
  router.post(BASE_ROUTE, controller.createCompany);
  return router;
}

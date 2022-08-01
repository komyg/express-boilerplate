import { IRouter } from 'express';
import { once } from '../common/fp/once/once';
import { bootstrapCompanyApplication } from './application/company.application.bootstrap';
import { bootstrapCompanyDomain } from './domain/company.domain.bootstrap';
import { bootstrapCompanyInfrastructure } from './infrastructure/company.infrastructure.bootstrap';
import { bootstrapCompanyController } from './presentation/company.controller.bootstrap';
import { bootstrapCompanyRouter } from './presentation/company.router';

export function bootstrapCompanyModule(router: IRouter) {
  const domain = bootstrapCompanyDomain();
  const infrastructure = bootstrapCompanyInfrastructure();
  const getApplication = once(() =>
    bootstrapCompanyApplication(domain, infrastructure)
  );
  const getController = once(() =>
    bootstrapCompanyController(getApplication())
  );
  const getRouter = once(() => bootstrapCompanyRouter(getController(), router));

  return getRouter();
}

import { once } from '../../common/fp/once/once';
import { CompanyApplication } from '../application/company.application.bootstrap';
import { bootstrapCreateCompanyController } from './create-company/create-company.controller';

export type CompanyController = ReturnType<typeof bootstrapCompanyController>;
export function bootstrapCompanyController(application: CompanyApplication) {
  const getCreateCompanyController = once(() =>
    bootstrapCreateCompanyController(application)
  );
  return { createCompany: getCreateCompanyController() };
}

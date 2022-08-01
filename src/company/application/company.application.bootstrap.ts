import { once } from '../../common/fp/once/once';
import { CompanyDomain } from '../domain/company.domain.bootstrap';
import { CompanyInfrastructure } from '../infrastructure/company.infrastructure.bootstrap';
import { bootstrapCreateCompanyUseCase } from './create-company/create-company.use-case';

export type CompanyApplication = ReturnType<typeof bootstrapCompanyApplication>;
export function bootstrapCompanyApplication(
  domain: CompanyDomain,
  infrastructure: CompanyInfrastructure
) {
  const getCreateCompanyUseCase = once(() =>
    bootstrapCreateCompanyUseCase(domain, infrastructure)
  );

  return { createCompany: getCreateCompanyUseCase() };
}

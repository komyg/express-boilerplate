import { persistCompany } from './repository/persist-company.repository';

export type CompanyInfrastructure = ReturnType<
  typeof bootstrapCompanyInfrastructure
>;
export function bootstrapCompanyInfrastructure() {
  return { persistCompany };
}

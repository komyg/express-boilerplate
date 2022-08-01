import { createCompany } from './create-company/create-company.domain';

export type CompanyDomain = ReturnType<typeof bootstrapCompanyDomain>;
export function bootstrapCompanyDomain() {
  return { createCompany };
}

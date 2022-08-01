import { CreateCompanyValueObject } from '../../domain/create-company/value-objects/create-company.value-object';
import crypto from 'crypto';
import { CompanyValueObject } from '../../domain/create-company/value-objects/company.value-object';

export async function persistCompany(
  company: CreateCompanyValueObject
): Promise<CompanyValueObject> {
  const entity = await createCompanyEntity(company);

  return Promise.resolve({
    id: entity.id,
    name: entity.name,
    startDate: entity.startDate,
    endDate: entity.endDate,
  });
}

async function createCompanyEntity(company: CreateCompanyValueObject) {
  return Promise.resolve({
    id: crypto.randomUUID(),
    ...company,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

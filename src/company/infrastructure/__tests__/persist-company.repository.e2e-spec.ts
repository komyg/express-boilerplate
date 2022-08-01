import { CreateCompanyValueObject } from '../../domain/create-company/value-objects/create-company.value-object';
import { persistCompany } from '../repository/persist-company.repository';

describe('Persist Company Repository', () => {
  it('should successfully create a company', async () => {
    const company: CreateCompanyValueObject = {
      name: 'Test Company',
      startDate: new Date('2022-08-02'),
      endDate: new Date('2022-08-31'),
    };

    const result = await persistCompany(company);
    expect(result.id).toBeTruthy();
    expect(result.name).toBe(company.name);
  });
});

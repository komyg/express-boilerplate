import { isError } from '../../../../common/errors/is-error';
import { CreateCompanyRequestDto } from '../../../presentation/create-company/dto/create-company.dto';
import { createCompany } from '../create-company.domain';

describe('Create Company Domain', () => {
  it('should successfully create a company value object', () => {
    const companyDto: CreateCompanyRequestDto = {
      name: 'Test Company',
      startDate: new Date('2022-08-02'),
      endDate: new Date('2022-08-31'),
    };

    const result = createCompany(companyDto);
    expect(result).toEqual(companyDto);
  });

  it('should return an error in case the start date is greater than the end date', () => {
    const companyDto: CreateCompanyRequestDto = {
      name: 'Test Company',
      endDate: new Date('2022-08-02'),
      startDate: new Date('2022-08-31'),
    };

    const result = createCompany(companyDto);
    expect(isError(result)).toBe(true);
  });

  it('should return an error if the validation fails', () => {
    const companyDto: CreateCompanyRequestDto = {
      name: '',
      startDate: new Date('2022-08-02'),
      endDate: new Date('2022-08-31'),
    };
    const result = createCompany(companyDto);
    expect(isError(result)).toBe(true);
  });
});

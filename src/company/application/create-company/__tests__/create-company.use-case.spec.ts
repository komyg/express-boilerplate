import { bootstrapCreateCompanyUseCase } from '../create-company.use-case';
import crypto from 'crypto';
import { CompanyDomain } from '../../../domain/company.domain.bootstrap';
import { CompanyInfrastructure } from '../../../infrastructure/company.infrastructure.bootstrap';
import { CreateCompanyRequestDto } from '../../../presentation/create-company/dto/create-company.dto';
import { isError } from '../../../../common/errors/is-error';
import { DomainError } from '../../../../common/errors/domain.error';

describe('Create Company Use Case', () => {
  let input: CreateCompanyRequestDto;

  beforeEach(() => {
    input = {
      name: 'Test Company',
      startDate: new Date('2022-08-02'),
      endDate: new Date('2022-08-31'),
    };
  });

  it('should successfully create a company', async () => {
    const mockDomain: CompanyDomain = {
      createCompany: jest.fn().mockImplementation((input) => ({ ...input })),
    };
    const mockInfrastructure: CompanyInfrastructure = {
      persistCompany: jest
        .fn()
        .mockImplementation((input) =>
          Promise.resolve({ id: crypto.randomUUID(), ...input })
        ),
    };

    const createCompany = bootstrapCreateCompanyUseCase(
      mockDomain,
      mockInfrastructure
    );

    const result = await createCompany(input);
    expect(isError(result)).toBe(false);
    expect(result.name).toBe(input.name);
  });

  it('should handle a domain error', async () => {
    const mockDomain: CompanyDomain = {
      createCompany: jest.fn().mockReturnValue(new DomainError('Error')),
    };
    const mockInfrastructure: CompanyInfrastructure = {
      persistCompany: jest
        .fn()
        .mockImplementation((input) =>
          Promise.resolve({ id: crypto.randomUUID(), ...input })
        ),
    };

    const createCompany = bootstrapCreateCompanyUseCase(
      mockDomain,
      mockInfrastructure
    );

    const result = await createCompany(input);
    expect(isError(result)).toBe(true);
  });

  it('should handle an infrastructure error', async () => {
    const mockDomain: CompanyDomain = {
      createCompany: jest.fn().mockImplementation((input) => ({ ...input })),
    };
    const mockInfrastructure: CompanyInfrastructure = {
      persistCompany: jest.fn().mockRejectedValue(new Error('Error')),
    };

    const createCompany = bootstrapCreateCompanyUseCase(
      mockDomain,
      mockInfrastructure
    );

    const result = await createCompany(input);
    expect(isError(result)).toBe(true);
  });
});

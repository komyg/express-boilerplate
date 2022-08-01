import { taskEither } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { DomainError } from '../../../common/errors/domain.error';
import { InfrastructureError } from '../../../common/errors/infrastructure.error';
import { isError } from '../../../common/errors/is-error';
import { CompanyDomain } from '../../domain/company.domain.bootstrap';
import { CreateCompanyValueObject } from '../../domain/create-company/value-objects/create-company.value-object';
import { CompanyInfrastructure } from '../../infrastructure/company.infrastructure.bootstrap';
import { CreateCompanyRequestDto } from '../../presentation/create-company/dto/create-company.dto';

export function bootstrapCreateCompanyUseCase(
  domain: CompanyDomain,
  infrastructure: CompanyInfrastructure
) {
  const createCompanyDomain = bootstrapCompanyDomain(domain);
  const persistCompany = bootstrapCompanyInfrastructure(infrastructure);

  const createCompanyUseCase = (input: CreateCompanyRequestDto) => {
    return pipe(
      taskEither.of(input),
      taskEither.chain(createCompanyDomain),
      taskEither.chain(persistCompany),
      taskEither.toUnion
    )();
  };
  return createCompanyUseCase;
}

function bootstrapCompanyDomain(domain: CompanyDomain) {
  return (
    input: CreateCompanyRequestDto
  ): taskEither.TaskEither<DomainError, CreateCompanyRequestDto> => {
    const company = domain.createCompany(input);
    const result = isError(company)
      ? taskEither.left(company)
      : taskEither.right(company);

    return result as taskEither.TaskEither<
      DomainError,
      CreateCompanyRequestDto
    >;
  };
}

function bootstrapCompanyInfrastructure(infrastructure: CompanyInfrastructure) {
  return (input: CreateCompanyValueObject) => {
    return taskEither.tryCatch(
      () => infrastructure.persistCompany(input),
      (err) => new InfrastructureError((err as Error).message)
    );
  };
}

import { either } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { DomainError } from '../../../common/errors/domain.error';
import { CreateCompanyRequestDto } from '../../presentation/create-company/dto/create-company.dto';
import { createCompanyValidationSchema } from './validation-schemas/create-company.validation-schema';
import { CreateCompanyValueObject } from './value-objects/create-company.value-object';

export function createCompany(
  companyDto: CreateCompanyRequestDto
): DomainError | CreateCompanyValueObject {
  return pipe(
    either.of(companyDto),
    either.chain(validateDto),
    either.chain(validateDates),
    either.map(createValueObject),
    either.toUnion
  );
}

function createValueObject(company: CreateCompanyRequestDto) {
  return { ...company };
}

function validateDto(company: CreateCompanyRequestDto) {
  const { error, value } = createCompanyValidationSchema.validate(company);
  return error
    ? either.left(new DomainError(error.message))
    : either.right(value);
}

function validateDates(company: CreateCompanyRequestDto) {
  return company.startDate > company.endDate
    ? either.left(new DomainError('Start date must be before end date'))
    : either.right(company);
}

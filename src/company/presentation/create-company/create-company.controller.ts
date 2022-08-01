import { Request, Response } from 'express';
import { isError } from '../../../common/errors/is-error';
import { CompanyApplication } from '../../application/company.application.bootstrap';
import { createCompanyValidationSchema } from './validation-schemas/create-company.validation-schema';

export function bootstrapCreateCompanyController(
  application: CompanyApplication
) {
  const createCompany = boostrapCreateCompany(application);
  return createCompany;
}

function boostrapCreateCompany(application: CompanyApplication) {
  return async (request: Request, response: Response) => {
    const { error } = createCompanyValidationSchema.validate(request.body);
    if (error) {
      response.status(400).json(error.message);
      return;
    }

    const result = await application.createCompany(request.body);
    isError(result)
      ? response.status(400).json(result)
      : response.status(201).json(result);
  };
}

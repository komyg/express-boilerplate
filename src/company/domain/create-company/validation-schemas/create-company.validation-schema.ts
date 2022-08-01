import Joi from 'joi';

export const createCompanyValidationSchema = Joi.object({
  name: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
});

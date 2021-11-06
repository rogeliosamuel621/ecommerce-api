import * as Joi from 'joi';

export const schemaValidations = Joi.object({
  PORT: Joi.number().required(),
  MONGO_DB_URI: Joi.string().required(),
});

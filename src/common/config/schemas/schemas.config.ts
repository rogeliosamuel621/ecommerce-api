import * as Joi from 'joi';

export const schemaValidations = Joi.object({
  PORT: Joi.number().required(),
  API_KEY: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  MONGO_DB_URI: Joi.string().required(),
});

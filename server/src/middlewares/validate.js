const AppError = require("../utils/AppError");
const { z } = require("zod");

const parseValidationError = (error) => {
  try {
    const parsedError = JSON.parse(error.message);
    const validationErrors = parsedError.map((error) => ({
      field: error.path[0],
      message: error.message,
    }));
    return validationErrors;
  } catch (error) {
    return [];
  }
};

const validate = (schema) => {
  //   return (req, res, next) => {
  //     const { error } = schema.validate(req.body);
  //     if (error) {
  //       return next(new AppError(error.details[0].message, 400));
  //     }
  //     next();
  //   };
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = parseValidationError(error);
        const formattedErrors = validationErrors.map((error) => ({
          field: error.field,
          message: error.message,
        }));
        return next(new AppError(formattedErrors, 400));
      }
      next(error);
    }
  };
};

module.exports = validate;

class AppError extends Error {
  constructor(errors, statusCode) {
    super();
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    // Set the message property based on the errors array
    if (Array.isArray(errors)) {
      this.message = errors
        .map((error) => `${error.field}: ${error.message}`)
        .join(", ");
    } else {
      this.message = errors;
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

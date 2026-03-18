const { HTTP_STATUS_CODES } = require("../utils/constants");

class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Resource not found") {
    super(HTTP_STATUS_CODES.NOT_FOUND, message);
  }
}

class BadRequestError extends CustomError {
  constructor(message = "Bad request") {
    super(HTTP_STATUS_CODES.BAD_REQUEST, message);
  }
}

class ConflictError extends CustomError {
  constructor(message = "Conflict") {
    super(HTTP_STATUS_CODES.CONFLICT, message);
  }
}

class InternalServerError extends CustomError {
  constructor(message = "Internal server error") {
    super(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, message);
  }
}

module.exports = { NotFoundError, ConflictError };
module.exports = {
  CustomError,
  NotFoundError,
  BadRequestError,
  ConflictError,
  InternalServerError,
};

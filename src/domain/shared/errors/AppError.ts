enum StatusCode {
  CONFLICT = 409,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export class AppError extends Error {
  public readonly message: string;

  public readonly statusCode: StatusCode;

  constructor(message: string, statusCode: StatusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

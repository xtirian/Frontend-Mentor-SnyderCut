export class ErrorPattern {
  constructor(
    public message: string,
    public status: number,
    public error?: string,
    public details?: string
  ) {}

  static badRequest(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 400, error, details);
  }

  static missingRequired(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 400, error, details);
  }

  static unauthorized(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 401, error, details);
  }

  static forbidden(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 403, error, details);
  }

  static notFound(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 404, error, details);
  }

  static internalServerError(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 500, error, details);
  }

  static conflict(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 409, error, details);
  }

  static unprocessableEntity(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 422, error, details);
  }

  static tooManyRequests(message: string, error?: string, details?: string) {
    return new ErrorPattern(message, 429, error, details);
  }
}
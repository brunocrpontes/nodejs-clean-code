import { HttpRequest, HttpResponse } from '../protocols/Http'
import ValidationError, { Errors } from '../errors/ValidationError'

export default class AuthorizationController {
  authorize (request: HttpRequest): HttpResponse {
    const requiredFields = ['email', 'password']
    const errors: Errors = {}

    for (const field of requiredFields) {
      if (!request.body[field]) {
        errors[field] = [
          ...(errors[field] || []),
          'Campo Obrigatório'
        ]
      }
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors)
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}

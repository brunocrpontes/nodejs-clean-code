import { HttpRequest, HttpResponse } from '../protocols/Http'
import UnprocessableEntityError from '../errors/UnprocessableEntityError'

export default class AuthorizationController {
  authorize (request: HttpRequest): HttpResponse {
    const requiredFields = ['email', 'password']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        throw new UnprocessableEntityError(`Missing param: ${field}.`)
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}

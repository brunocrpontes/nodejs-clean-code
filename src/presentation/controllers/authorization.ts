import { HttpRequest, HttpResponse } from '../protocols/Http'
import { MissingParamError } from '../errors/MissingParamError'
import { UnprocessableEntity } from '../helpers/HttpHelpers'

export default class AuthorizationController {
  authorize (request: HttpRequest): HttpResponse {
    if (!request.body.email) {
      return UnprocessableEntity(new MissingParamError('email'))
    }

    if (!request.body.password) {
      return UnprocessableEntity(new MissingParamError('password'))
    }
  }
}

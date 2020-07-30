import { HttpRequest, HttpResponse } from '../protocols/http'

export default class AuthorizationController {
  authorize (request: HttpRequest): HttpResponse {
    if (!request.body.email) {
      return {
        statusCode: 422,
        body: {
          message: 'Há campos inválidos no formulário',
          errors: {
            email: 'Campo Obrigatório.'
          }
        }
      }
    }

    if (!request.body.password) {
      return {
        statusCode: 422,
        body: {
          message: 'Há campos inválidos no formulário',
          errors: {
            password: 'Campo Obrigatório.'
          }
        }
      }
    }
  }
}

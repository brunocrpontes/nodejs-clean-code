
export default class AuthorizationController {
  authorize (request: any): any {
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

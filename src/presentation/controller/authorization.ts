
export default class AuthorizationController {
  authorize (request: any): any {
    return {
      statusCode: 422,
      body: new Error('Há campos inválidos no formulário')
    }
  }
}

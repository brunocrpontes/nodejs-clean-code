import AuthorizationController from './authorization'

describe('Authorization Controller', () => {
  test("it should return status code 422 if name isn't provided", () => {
    const sut = new AuthorizationController()
    const request = {
      body: {
        email: 'brunocrpontes@gmail.com',
        password: '********'
      }
    }

    const response = sut.authorize(request)

    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual(new Error("Há campos inválidos no formulário"))
  })
})

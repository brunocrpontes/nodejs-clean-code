import AuthorizationController from './authorization'

describe('Authorization Controller', () => {
  test("it should return status code 422 if email isn't provided", () => {
    const sut = new AuthorizationController()
    const request = {
      body: {
        password: '********'
      }
    }

    const response = sut.authorize(request)

    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual({
      "message": "Há campos inválidos no formulário",
      "errors": {
        "email": "Campo Obrigatório."
      }
    })
  })

  test("it should return status code 422 if password isn't provided", () => {
    const sut = new AuthorizationController()
    const request = {
      body: {
        email: 'brunocrpontes@gmail.com',
      }
    }

    const response = sut.authorize(request)

    expect(response.statusCode).toBe(422)
    expect(response.body).toMatchObject({
      "message": "Há campos inválidos no formulário",
      "errors": {
        "password": "Campo Obrigatório."
      }
    })
  })
})



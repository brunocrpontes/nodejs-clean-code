import AuthorizationController from './authorization'
import { MissingParamError } from '../errors/MissingParamError'

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
    expect(response.body).toEqual(new MissingParamError('email'))
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
    expect(response.body).toEqual(new MissingParamError('password'))
  })
})



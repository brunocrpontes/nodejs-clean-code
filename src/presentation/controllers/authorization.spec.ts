import AuthorizationController from './authorization'
import UnprocessableEntityError from '../errors/UnprocessableEntityError'

describe('Authorization Controller', () => {
  test("it should return an Unprocessable Entity Error if email isn't provided", () => {
    const sut = new AuthorizationController()
    const request = {
      body: {
        password: '********'
      }
    }

    const performRequest = () => sut.authorize(request)

    expect(performRequest).toThrowError(UnprocessableEntityError)
    expect(performRequest).toThrowError(/^Missing param: email\.$/)
  })

  test("it should return an Unprocessable Entity Error if password isn't provided", () => {
    const sut = new AuthorizationController()
    const request = {
      body: {
        email: 'brunocrpontes@gmail.com',
      }
    }

    const performRequest = () => sut.authorize(request)

    expect(performRequest).toThrowError(UnprocessableEntityError)
    expect(performRequest).toThrowError(/^Missing param: password\.$/)
  })
})



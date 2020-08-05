import AuthorizationController from './authorization'
import UnprocessableEntityError from '../errors/UnprocessableEntityResponseError'
import ValidationError from '../errors/ValidationError';

function makeSut() {
  return new AuthorizationController();
}


describe('Authorization Controller', () => {
  test("it should return an Unprocessable Entity Error if email isn't provided", () => {
    const sut = makeSut();
    const request = {
      body: {
        password: '********'
      }
    }

    const performRequest = () => sut.authorize(request)

    expect(performRequest).toThrowError(ValidationError)
    expect(performRequest).toThrowError('O conteúdo enviado não está de acordo com o esperado.')
  })

  test("it should return an Unprocessable Entity Error if password isn't provided", () => {
    const sut = makeSut();
    const request = {
      body: {
        email: 'brunocrpontes@gmail.com',
      }
    }

    const performRequest = () => sut.authorize(request)

    expect(performRequest).toThrowError(ValidationError)
    expect(performRequest).toThrowError('O conteúdo enviado não está de acordo com o esperado.')
  })
})



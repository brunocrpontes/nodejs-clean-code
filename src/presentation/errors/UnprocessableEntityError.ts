import RequestError from './RequestError'

export default class UnprocessableEntityError extends RequestError {
  constructor (message: string) {
    super(message, 422)
  }
}

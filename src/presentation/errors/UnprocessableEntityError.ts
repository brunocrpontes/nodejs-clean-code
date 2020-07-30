import ResponseError from './ResponseError'

export default class UnprocessableEntityError extends ResponseError {
  constructor (message: string) {
    super(message, 422)
  }
}

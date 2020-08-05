import { HttpResponse } from '../protocols/http'

export default class UnprocessableEntityResponse implements HttpResponse {
  public body: any
  public statusCode: number

  constructor (message: string) {
    this.body = message
    this.statusCode = 422
  }
}

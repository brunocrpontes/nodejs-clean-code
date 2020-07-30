import { HttpResponse } from '../protocols/Http'

export const UnprocessableEntity = (error: Error): HttpResponse => ({
  statusCode: 422,
  body: error
})

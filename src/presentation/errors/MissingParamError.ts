export class MissingParamError extends Error {
  constructor (...fields: string[]) {
    const message = `Missing param: ${fields.join(',')}`

    super(message)

    this.name = 'MissingParamError'
  }
}

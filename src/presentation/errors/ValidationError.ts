
export interface Errors {
  [fieldName: string]: string[]
}

export default class ValidationError extends Error {
  public errors: Errors

  constructor (errors: Errors) {
    super('O conteúdo enviado não está de acordo com o esperado.')

    this.errors = errors
  }
}
